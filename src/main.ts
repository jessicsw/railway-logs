import getDeploymentLogs from "./http/getDeploymentLogs";
import createHttpClient from "./http/client";
import fs from "fs";
import { Log } from "types";
import dotenv from "dotenv";

dotenv.config();

const ENDPOINT = "https://backboard.railway.app/graphql/v2";
const DEPLOYMENT_ID = process.env.DEPLOYMENT_ID ?? null;
const API_TOKEN = process.env.API_TOKEN ?? null;

const httpClient = createHttpClient(ENDPOINT, API_TOKEN);

const main = async () => {
  if (!DEPLOYMENT_ID) throw new Error(`Deployment ID is null.`);

  const exfilDeployLogs = (logs: Array<Log>) => {
    const shortDeployID = DEPLOYMENT_ID.substring(0, 7);
    const fileName = `deploymentLogs-${shortDeployID}.json`;

    fs.writeFile(fileName, JSON.stringify(logs), "utf8", (err) => {
      if (err) throw err;
      console.info(`Successfully exported logs to ${fileName}.`);
    });
  };

  await getDeploymentLogs(httpClient, DEPLOYMENT_ID).then((logs) =>
    exfilDeployLogs(logs)
  );
};

main();
