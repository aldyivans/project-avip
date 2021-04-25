import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Views/Home';
import Header from "./Layout/Header";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/"  component={Home} exact />
      </Switch>
    </Router>
   
  );
}

export default App;
