import { ApolloClient } from 'apollo-client'; // eslint-disable-line import/no-extraneous-dependencies
import { InMemoryCache } from 'apollo-cache-inmemory'; // eslint-disable-line import/no-extraneous-dependencies
import { HttpLink } from 'apollo-link-http'; // eslint-disable-line import/no-extraneous-dependencies

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;
