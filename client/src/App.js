import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Scheduler from "./pages/Scheduler";
import Login from "./pages/Login";


function App() {
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/scheduler" component={Scheduler} />
          <Route exact path="/login" component={Login} />          
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;