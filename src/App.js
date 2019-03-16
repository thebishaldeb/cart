import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/body/home";
import Layout from "./components/layout";
import './App.css';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;