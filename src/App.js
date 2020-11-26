import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apllo/react-hooks';
function App() {
  const client = new ApolloClient({
    uri: ''
  });
  return (
    <div className="App">
      <header className="App-header">
    <p>hello</p>
      </header>
    </div>
  );
}

export default App;
