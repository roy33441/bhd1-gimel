import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_APOLLO_URI,
    headers: {
      'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN_SECRET
    }
  }),
  cache: new InMemoryCache()
});
