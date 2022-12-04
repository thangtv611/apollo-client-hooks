import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
