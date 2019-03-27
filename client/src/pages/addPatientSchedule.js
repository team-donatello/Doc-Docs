import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
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
        enterDate: ""
    }

    componentDidMount() {
        this.loadAllData();
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
        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.gender);
        // console.log(this.state.date);
        console.log(this.state.time);
        console.log(this.state.enterDate);
        console.log(this.state.doctorname);
        if (this.state.name && this.state.age && this.state.gender ) {
            // save patients
            // API.savePatients({
            //     name: this.state.name,
            //     age: this.state.age,
            //     gender: this.state.gender,
            //     date: this.state.enterDate
            // })
            //     .then(res => this.loadAllData())
            //     .catch(err => console.log(err));

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
                doctorname: this.state.doctorname
            })
                .then(res => this.loadAllData())
                .catch(err => console.log(err));

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
                                {/* <Col size="md-6 sm-6">
                                    <div>
                                        <select className="form-control" id="time" onChange={this.handleTimeChange.bind(this)} value={this.state.time}>
                                            <option value="select">Select a Time</option>
                                            <option value="A">09:00 AM</option>
                                            <option value="B">10:00 AM</option>
                                            <option value="C">11:00 AM</option>
                                            <option value="D">12:00 PM</option>
                                            <option value="E">01:00 PM</option>
                                            <option value="F">02:00 PM</option>
                                            <option value="G">03:00 PM</option>
                                            <option value="H">04:00 PM</option>
                                            <option value="I">05:00 PM</option>
                                            <option value="J">06:00 PM</option>
                                        </select>
                                        <h2>{this.state.time}</h2>
                                    </div>
                                </Col> */}
                                {/* <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.enterDate}
                                        onChange={this.handleInputChange}
                                        name="enterDate"
                                        placeholder="YYYY-MM-DD (Required)">
                                    </Input>
                                    <DatePicker
                                        format={"dd-MMM-yyyy HH:mm:ss"}
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    />
                                </Col> */}
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