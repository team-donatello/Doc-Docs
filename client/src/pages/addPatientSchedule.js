import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Input, FormBtn, TextArea } from "../components/Form";
import { DayPilot } from "daypilot-pro-react";

class Admin extends Component {
    state = {
        freeDoctorArry: [],
        doctorname: 'Jon123',
        time: 'select',
        name: "",
        age: "",
        gender: "",
        date: "",
        enterDate: "",
        height: "",
        weight: "",
        heartrate: "",
        bloodpressure: "",
        bodyweight: "",
        medications: "",
        conditions: "",
        allergies: "",
        surgeries: "",
        physician: "",
        mdid: "",
        bill: "",
        email: "",
        phone: ""
    }

    componentDidMount() {
        this.loadAllData();
        console.log(this.props.match.params.doc)
        let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        let start = new DayPilot.Date.today().firstDayOfMonth();
        for (let y = 1; y <= 10; y++) {
            for (let x = 0; x < 25; x++) {
                let id = x + "_" + y;
                this.state.freeDoctorArry.push({
                    id: id,
                    resource: arr[y - 1],
                    start: start.addDays(x),
                    end: start.addDays(x + 1),
                    text: "",
                    barColor: "#38761d",
                    barBackColor: "#93c47d"
                });
            }
        }
        console.log(this.state.freeDoctorArry);
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleTimeChange(e) {
        this.setState({
            time: e.target.value
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();        
        if (this.state.name && this.state.age && this.state.gender && this.state.height && this.state.weight && this.state.heartrate && this.state.bloodpressure && this.state.bodyweight && this.state.email ) {
            // save patients
            API.savePatients({
                name: this.state.name,
                age: this.state.age,
                gender: this.state.gender,
                height: this.state.height,
                weight: this.state.weight,
                heartrate: this.state.heartrate,
                bloodpressure: this.state.bloodpressure,
                bodyweight: this.state.bodyweight,
                medications: this.state.medications.split(","),
                conditions: this.state.conditions.split(","),
                allergies: this.state.allergies.split(","),
                surgeries: this.state.surgeries.split(","),
                physician: this.state.physician,
                mdid: this.state.mdid,
                bill: this.state.bill,
                nextappt: this.props.match.params.id,
                email: this.state.email,
                phone: this.state.phone
            })
                .then(res => this.loadAllData())
                .catch(err => console.log(err));

            // save patients
            API.saveScheduler({
                id: Math.floor(Math.random() * 10000),
                text: this.state.name,
                start: this.props.match.params.id,
                end: this.props.match.params.id,
                resource: this.props.match.params.name,
                barColor: "#38761d",
                barBackColor: "#e69138",
                backColor: "#3c78d8",
                color: "white",
                doctorname:  this.props.match.params.doc
            })
                .then(res => this.loadAllData())
                .catch(err => console.log(err))
            window.location.reload();

        } else {
            alert("Fill All form Detail");
        }
    }

    render() {

        return (
            <Container fluid>
                <Row>
                    {/* <h1>{this.props.match.params.id}</h1>
                    <h1>{this.props.match.params.name}</h1> */}
                    <Container>
                        <Row>
                            <Col size="md-12 sm-12">

                            </Col>
                        </Row>
                        <Col size="md-12 sm-12">
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Patient Name (Required)">
                            </Input>
                            <p>Date : {this.props.match.params.id}</p>
                            <Row>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.age}
                                        onChange={this.handleInputChange}
                                        name="age"
                                        placeholder="Age (Required)">
                                    </Input>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.gender}
                                        onChange={this.handleInputChange}
                                        name="gender"
                                        placeholder="Gender (Required)">
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.height}
                                        onChange={this.handleInputChange}
                                        name="height"
                                        placeholder="Height (Required)">
                                    </Input>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.weight}
                                        onChange={this.handleInputChange}
                                        name="weight"
                                        placeholder="Weight (Required)">
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.heartrate}
                                        onChange={this.handleInputChange}
                                        name="heartrate"
                                        placeholder="Heartrate (Required)">
                                    </Input>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.bloodpressure}
                                        onChange={this.handleInputChange}
                                        name="bloodpressure"
                                        placeholder="Bloodpressure (Required)">
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.bodyweight}
                                        onChange={this.handleInputChange}
                                        name="bodyweight"
                                        placeholder="Body Weight (Required)">
                                    </Input>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <TextArea
                                        value={this.state.medications}
                                        onChange={this.handleInputChange}
                                        name="medications"
                                        placeholder="Medications">
                                    </TextArea>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6 sm-6">
                                    <TextArea
                                        value={this.state.conditions}
                                        onChange={this.handleInputChange}
                                        name="conditions"
                                        placeholder="Conditions">
                                    </TextArea>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <TextArea
                                        value={this.state.allergies}
                                        onChange={this.handleInputChange}
                                        name="allergies"
                                        placeholder="Allergies">
                                    </TextArea>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6 sm-6">
                                    <TextArea
                                        value={this.state.surgeries}
                                        onChange={this.handleInputChange}
                                        name="surgeries"
                                        placeholder="Surgeries">
                                    </TextArea>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.physician}
                                        onChange={this.handleInputChange}
                                        name="physician"
                                        placeholder="Physician">
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.mdid}
                                        onChange={this.handleInputChange}
                                        name="mdid"
                                        placeholder="MD Id">
                                    </Input>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.bill}
                                        onChange={this.handleInputChange}
                                        name="bill"
                                        placeholder="Bill">
                                    </Input>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="email"
                                        placeholder="Email">
                                    </Input>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}
                                        name="phone"
                                        placeholder="Phone">
                                    </Input>
                                </Col>
                            </Row>

                            <FormBtn
                                // disabled={!(this.state.name && !this.state.age && this.state.gender && this.state.enterDate && this.state.time)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit

                            </FormBtn>
                        </Col>
                    </Container>
                </Row>





            </Container>
        )
    }
}

export default Admin;