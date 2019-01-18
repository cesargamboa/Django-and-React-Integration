import React from "react";
import { Route, Switch } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleView from "./containers/ArticleDetailView";
import Login from './containers/Login';

const BaseRouter = () => (
  <Switch>
  <Route path="/login" exact component={Login} />
    <Route path="/:articleID" component={ArticleView} />
    <Route component={ArticleList} />
  </Switch>
);
export default BaseRouter;
