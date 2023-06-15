import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client/core";

const createHttpClient = (
  endpoint: string,
  apiToken: string
): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
};

export default createHttpClient;
