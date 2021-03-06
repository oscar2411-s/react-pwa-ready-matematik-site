import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.js";
import PythagorasPage from "./Pages/Matematik/PythagorasPage/Pythagoras";
import Hypotenuse from "./Pages/Matematik/PythagorasPage/Hypotenuse/Hypotenuse";
import Katete from "./Pages/Matematik/PythagorasPage/Katete/Katete";
import StatistikPage from "./Pages/Matematik/StatistikPage/StatistikPage";
import TalanalyserPage from "./Pages/Matematik/StatistikPage/TalanalyserPage/TalanalyserPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/matematik" component={CategoryPage} />
          <Route
            exact
            path="/matematik/pythagoras"
            component={PythagorasPage}
          />
          <Route
            exact
            path="/matematik/pythagoras/hypotenuse"
            component={Hypotenuse}
          />
          <Route exact path="/matematik/pythagoras/katete" component={Katete} />
          <Route exact path="/matematik/statistik/" component={StatistikPage} />
          <Route
            exact
            path="/matematik/statistik/tal-analyser"
            component={TalanalyserPage}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
