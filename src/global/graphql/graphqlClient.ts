import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

import authStorage from "../../auth/storage";
import * as SecureStore from "expo-secure-store";

const httpLink = new HttpLink({
  uri: "https://finalyrics.hasura.app/v1/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwiWC1IYXN1cmEtVXNlci1JZCI6IjhmMzVhMjljLTFjOGQtNDM3Yy1iMTAxLTBjZjhlOWI5YzRkNCIsInVzZXJuYW1lIjoia2FsIiwiZmlyc3RuYW1lIjoiS2FsdSIsImxhc3RuYW1lIjoiIiwiZW1haWwiOiJrYWxraWRhbmJla2FsdTFAZ21haWwuY29tIn0sImlhdCI6MTY1OTk4ODA0NywiZXhwIjoxNjYwMDI0MDQ3fQ.mrPVkt3cllvGwIvs70Gd4aky-gJ9zqfvU2Q8iW71n78",
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
