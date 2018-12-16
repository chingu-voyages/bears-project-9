import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About/About";
// import NavBar from "./components/NavBar/NavBar";
import "./styles/App.sass";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {routeProps => (
              <Landing
                {...routeProps}
                // other props can be added here this will allow login/logout logic to live in this component
                // along with whatever other functionality and the relevant data we want to live in state in this component
              />
            )}
          </Route>
          <Route exact path="/about">
            {routeProps => (
              <About
                {...routeProps}
                // other props can be added here this will allow login/logout logic to live in this component
                // along with whatever other functionality and the relevant data we want to live in state in this component
              />
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
