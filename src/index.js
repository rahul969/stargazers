import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import { GlobalContextProvider } from "./reducer/global-context";
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer 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`,
  },
});

ReactDOM.render(
  <GlobalContextProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </GlobalContextProvider>,

  document.getElementById("root")
);
