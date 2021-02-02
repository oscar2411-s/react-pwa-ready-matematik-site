import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/matematik">
            <CategoryPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
