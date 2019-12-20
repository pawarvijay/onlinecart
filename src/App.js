import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider, connect } from 'react-redux';


import Products from './components/products/products';
import Cart from './components/cart/cart';
import store from "./integrations/redux";
import Navbar from './components/navbar/navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  {
    path: "/",
    component: Products
  },
  {
    path: "/cart",
    component: Cart
  }
];


export default function RouteConfigExample() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes exact={true} key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}