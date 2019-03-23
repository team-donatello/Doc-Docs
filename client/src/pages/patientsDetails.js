import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Accordion from "../components/Accordion";

class PatientsDetails extends Component {

    state = {
        patientScheduler: {},
        patient: [],
        patientAllDetail: {},
        name: "",
        age: "",
        gender: "",
        data: ""
    };
    componentDidMount() {
        API.getSchedulerWithID(this.props.match.params.id)
            .then(res => this.setState({ patientScheduler: res.data }))
            .catch(err => console.log(err));
        this.loadPatientDetail();
    }

    loadPatientDetail = () => {
        API.getPatientDetails()
            .then(res =>
                this.setState({ patient: res.data })
                //, name: "", age: "", gender: "", date: ""
            )
            .catch(err => console.log(err));

    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                Patient Name : {this.state.patientScheduler.id} by {this.state.patientScheduler.text}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <h2>
                            {this.state.patient.filter(patientdetails => {
                                if (patientdetails.name === this.state.patientScheduler.text) {
                                    this.setState.patientAllDetail = patientdetails;
                                    this.state.name= patientdetails.name
                                    this.state.age= patientdetails.age
                                    this.state.gender= patientdetails.gender
                                    this.state.date= patientdetails.date
                                    console.log(patientdetails.name + patientdetails.age + patientdetails._id + patientdetails.gender + patientdetails.date);

                                }
                                return console.log("text display : " + this.state.patientScheduler.text + " name : " + patientdetails.name + " age : " + patientdetails.age);

                            })}

                        </h2>
                        <Accordion
                            name={this.state.name}
                            age={this.state.age}
                            gender={this.state.gender}
                            date={this.state.date}                            
                            >

                        </Accordion>
                        {/* <Accordion></Accordion> */}

                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to={{
                            pathname: '/scheduler/' + this.props.match.params.name
                        }}
                        >← Back to Scheduler</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PatientsDetails;
