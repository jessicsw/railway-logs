import { ApolloClient, NormalizedCacheObject, gql } from "@apollo/client/core";
import { DeploymentLogs } from "types";

/**
 * Returns logs for `deploymentId`
 */

const getDeploymentLogs = async (
  httpClient: ApolloClient<NormalizedCacheObject>,
  deploymentId: string
) => {
  const res = await httpClient.query<DeploymentLogs>({
    query: gql`
      query deploymentLogs($deploymentId: String!) {
        deploymentLogs(deploymentId: $deploymentId, limit: 10000) {
          timestamp
          severity
          message
        }
      }
    `,
    variables: {
      deploymentId,
    },
  });

  const deploymentLogs = res.data.deploymentLogs;

  return Promise.resolve(deploymentLogs);
};

export default getDeploymentLogs;
