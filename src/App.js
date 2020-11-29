import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';
function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.sh/'
  });
  return (
    <ApolloProvider client={client}>
    <main>
    <p>hello</p>
    </main>
    </ApolloProvider>
  );
}

export default App;
