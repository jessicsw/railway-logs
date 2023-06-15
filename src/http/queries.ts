import { gql } from "@apollo/client/core";

const deployLogQuery = gql`
  query deploymentLogs($deploymentId: String!) {
    deploymentLogs(deploymentId: $deploymentId, limit: 10000) {
      timestamp
      severity
      message
    }
  }
`;

// Query to return plugins and services in any environment
const projectDataQuery = gql`
  query project($projectId: String!) {
    project(id: $projectId) {
      id
      name
      plugins {
        edges {
          node {
            id
            name
          }
        }
      }
      environments {
        edges {
          node {
            id
            name
            deployments(first: 1) {
              edges {
                node {
                  id
                  staticUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default { deployLogQuery, projectDataQuery };
