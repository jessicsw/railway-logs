export interface DeploymentLogs {
  deploymentLogs: Array<Log>;
}

export interface Log {
  __typename: "Log";
  timestamp: string;
  severity: string;
  message: string;
}
