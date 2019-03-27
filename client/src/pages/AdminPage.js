import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Link } from "react-router-dom";

import { FormBtn } from "../components/Form";

class Admin extends Component {
    state = {        
        doctors: [],
        schedulers: [],
        patients: [],
        doctorName: "",
        id: "",
        text: "",
        start: "",
        end: "",
        resource: "",
        barColor: "",
        barBackColor: "",
        backColor: "",
        color: ""
    }

    componentDidMount() {
        this.loadAllData();                
    }

    loadAllData = () => {
        API.getDoctors()
            .then(res =>
                this.setState({ doctors: res.data })
            )
            .catch(err => console.log(err));
        API.getScheduler()
            .then(res =>
                this.setState({ schedulers: res.data, name: "", username: "", password: "" })
            )
            .catch(err => console.log(err));
        API.getPatientDetails()
            .then(res =>
                this.setState({ patients: res.data, name: "", username: "", password: "" })
            )
            .catch(err => console.log(err));
    }
    addPatient = event => {
        event.preventDefault();
        window.location.assign("/adminPage/addPatient");
    }
    addDoctor = event => {
        event.preventDefault();
        console.log("add doctor button click");
        window.location.assign("/adminPage/addDoctor");
    }

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Admin Page</h1>
                        </Jumbotron>
                    </Col>
                </Row>
               
                <Row>
                    <Container>
                        <FormBtn>
                        <Link to={{
                                pathname: '/adminPage/addPatient'
                            }}
                            >Add Patient Appoinment</Link>
                            {/* // onClick={this.addPatient}>
                            // Add Patient */}
                        </FormBtn>
                    </Container>
                    <Container>
                        <FormBtn>
                        <Link to={{
                                pathname: '/adminPage/addDoctor'
                            }}
                            >Add Doctor</Link>
                            {/* onClick={this.addDoctor}>
                            Add Doctor */}
                        </FormBtn>
                    </Container>
                </Row>
                
            </Container>
        )
    }
}

export default Admin;