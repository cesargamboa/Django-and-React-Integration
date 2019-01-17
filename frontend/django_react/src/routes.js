import React from "react";
import { Route, Switch } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleView from "./containers/ArticleDetailView";

const BaseRouter = () => (
  <Switch>
    <Route path="/:articleID" component={ArticleView} />
    <Route component={ArticleList} />
  </Switch>
);
export default BaseRouter;
