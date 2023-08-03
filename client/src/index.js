import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App';
import "./index.css"

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql' || 'https://whatsmoving-66c88879e0a7.herokuapp.com/', 
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
