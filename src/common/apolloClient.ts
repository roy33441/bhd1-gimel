import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const wsLink = new WebSocketLink({
  uri: `wss://wise-starfish-11.hasura.app/v1/graphql`, // use wss for a secure endpoint
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "EI0EnecW2i1B700UxvsivQgj0OfPAIA4y8fvQ54V9rlGlTkWJa1V6G54BqUw81uD",
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: `https://wise-starfish-11.hasura.app/v1/graphql`,
  headers: {
    "x-hasura-admin-secret":
      "EI0EnecW2i1B700UxvsivQgj0OfPAIA4y8fvQ54V9rlGlTkWJa1V6G54BqUw81uD",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
