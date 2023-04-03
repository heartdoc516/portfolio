import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/clfwla43g5hgq01uo83wsbppw/master",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetProjects {
        projects {
          name
        }
      }
    `,
  })
  .then((result) => console.log(result));

export default client;
