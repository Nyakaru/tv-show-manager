//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import indexRoutes from "./routes/index.jsx";
import { Route, Switch } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Login from "./views/login"
import SignUp from "./views/signUp"

import "./assets/scss/style.css";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
  }
});

const client = new ApolloClient ({
  cache: cache,
  link: link

})

ReactDOM.render(
  <ApolloProvider client={client}>
  
    <HashRouter>
    <Switch><Route path="/" exact component={SignUp} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={SignUp} />
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </HashRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
