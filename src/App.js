import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/body/home";
import Cart from "./components/body/cart";
import Layout from "./components/layout";
import "./App.css";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Layout>
  );
};

export default Routes;
