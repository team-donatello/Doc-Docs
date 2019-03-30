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
        height: "",
        weight: "",
        heartrate: "",
        bloodpressure: "",
        medications: [],
        conditions: [],
        allergies: [],
        surgeries: [],
        email: "",
        phone: "",
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
                                Patient Name : {this.state.patientScheduler.text}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 md-offset-1">
                        <h2>
                            {this.state.patient.filter(patientdetails => {
                                if (patientdetails.name === this.state.patientScheduler.text) {
                                    this.setState.patientAllDetail = patientdetails 
                                    this.state.name = patientdetails.name
                                    this.state.age = patientdetails.age
                                    this.state.gender = patientdetails.gender
                                    this.state.height = patientdetails.height
                                    this.state.weight = patientdetails.weight
                                    this.state.heartrate = patientdetails.heartrate
                                    this.state.bloodpressure = patientdetails.bloodpressure
                                    this.state.medications = patientdetails.medications
                                    this.state.conditions = patientdetails.conditions
                                    this.state.allergies = patientdetails.allergies
                                    this.state.surgeries = patientdetails.surgeries
                                    this.state.email = patientdetails.email
                                    this.state.phone = patientdetails.phone
                                    
                                    // console.log(patientdetails.name + patientdetails.age + patientdetails._id + patientdetails.gender + patientdetails.date);                                    
                                }                              

                            })}
                            
                        </h2>
                        
                        <Accordion
                            name={this.state.name}
                            age={this.state.age}
                            gender={this.state.gender}
                            height={this.state.height}
                            weight={this.state.weight}
                            heartrate={this.state.heartrate}
                            bloodpressure={this.state.bloodpressure }
                            medications={this.state.medications}
                            conditions={this.state.conditions}
                            allergies={this.state.allergies}
                            surgeries={this.state.surgeries}
                            email= {this.state.email}
                            phone={this.state.phone}
                        >

                        </Accordion>
                              
                        {/* <Accordion></Accordion> */}

                    </Col>
                </Row>
                <Row>
                    <Col size="md-2 md-offset-1">
                        <Link to={{
                            pathname: '/scheduler/' + this.props.match.params.name
                        }}
                        >← Back to Scheduler</Link>
                    </Col>
                </Row>
                <Row size="md-12">
                    
                </Row>
            </Container>
        )
    }
}

export default PatientsDetails;
