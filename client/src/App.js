import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Scheduler from "./pages/Scheduler";
import Login from "./pages/Login";
import PatientDetail from "./pages/patientsDetails";
import AdminPage from "./pages/AdminPage";
import AddDoctor from "./pages/AddDoctor";
import AddPatient from "./pages/AddPatient";
import AddPatientSchedule from "./pages/addPatientSchedule";

function App() {
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/scheduler/:name" component={Scheduler} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/scheduler/:name/:id" component={PatientDetail} />  
          <Route exact path="/adminPage" component={AdminPage} />
          <Route exact path="/adminPage/addDoctor" component={AddDoctor} />
          <Route exact path="/adminPage/addPatient" component={AddPatient} />       
          <Route exact path="/addPatientSchedule/:id/:name/:doc" component={AddPatientSchedule} />       
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;