import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import authStore from "../../auth/storage";

const httpLink = createHttpLink({
  uri: "https://finalyrics.hasura.app/v1/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  const token = await authStore.getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
