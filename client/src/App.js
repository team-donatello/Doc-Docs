import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Scheduler from "./pages/Scheduler";
import Login from "./pages/Login";
import PatientDetail from "./pages/patientsDetails";
import AdminPage from "./pages/AdminPage";


function App() {
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/scheduler/:name" component={Scheduler} />
          {/* render={(props) => <Scheduler {...props}  />} */}
          {/* render={()=>(<Scheduler loginDoctorName={this.state.loginDoctorName}/>)} */}
          {/* loginDoctorName={this.state.loginDoctorName} */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/scheduler/:name/:id" component={PatientDetail} />  
          <Route exact path="/adminPage" component={AdminPage} />       
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;