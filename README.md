# _railway-logs_

_railway-log_ is a tool that uses the Railway API to collect and exfil deployment logs to a text file.


# Customer Response

Hey SmolTech!

My name is Jessica and I'm a Support Engineer here at Railway. Sorry to hear you've run into some trouble.

I'm sharing a tool, _railway-logs_, that'll help you exfil your deployment logs for a more comprehensive view of what's going on. 

_railway-logs_ depends on Railway's API. If you're already a part of the Priority Boarding program, you're good to go! If not, you can easily get access [here](https://docs.railway.app/reference/priority-boarding) and Percy (our Discord bot) will help get set up.

The tool needs to be configured with a couple of environment variables:


| Parameter   | Type        | Description |
| ----------- | ----------- | ----------- |
| `projectId` | `String`    | **Required.** Railway project ID. You can find this under Dashboard > Project > Settings > General.
|`deploymentId`| `String`    | **Required.** Railway deployment ID. At this time, you'll need to run a query on your end to get the deployment ID's of your plugins and services which you can find under [queries.ts](./src/http/queries.ts).

When you run the script, it will fetch deployment logs for a given `deploymentId`, write the data into a .json file, and output the file into the top-level directory.

> ⚠️ Railway's API has a [rate limit](https://docs.railway.app/reference/public-api#rate-limits) of 1,000 requests/day. If you're already using the Railway API for something else, you may need to keep an eye on this!

Here are some troubleshooting areas that you'll want to keep in mind while going through your logs:
* **Error IDs** - Any exceptions, connectivity issues, or misconfigurations
* **Sequence of Events** - Identify any unexpected or incorrect behavior to pinpoint the stage or component where the issue occurs
* **Performance Monitoring** - Metrics like response times, throughput, resource utilization can help identify performance bottlenecks, slow queries, or overloaded resources that may be impacting your app's responsiveness
* **Systems Interaction** - Issues related to integrations and communication failures

I'm also sharing the Railway API documentation and playground [here](https://railway.app/graphiql) and highly recommend exploring what's available to help you further troubleshoot.


Let me know how this goes on your end - happy to help if anything else comes up! 👍

Jessica



