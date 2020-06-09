import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/register" exact component={Register} />
           <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
    </Router>
  );
}

export default App;
