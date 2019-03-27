import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Form";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
// import DatePicker from 'react-date-picker';

class AddPatient extends Component {
    state = {
        schedulers: [],
        doctors: [],
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
        // API.getPatientDetails()
        //     .then(res =>
        //         this.setState({ patients: res.data, name: "", username: "", password: "" })
        //     )
        //     .catch(err => console.log(err));
    }
    handleChange(e) {
        this.setState({
            doctorname: e.target.value,
        })
    }
    handleTimeChange(e) {
        this.setState({
            time: e.target.value
        })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    onChange = date => this.setState({ date })


    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.gender);
        // console.log(this.state.date);
        console.log(this.state.time);
        console.log(this.state.enterDate);
        console.log(this.state.doctorname);
        if (this.state.name && this.state.age && this.state.gender && this.state.time && this.state.enterDate) {
            // save patients
            API.savePatients({
                name: this.state.name,
                age: this.state.age,
                gender: this.state.gender,
                date: this.state.enterDate
            })
                .then(res => this.loadAllData())
                .catch(err => console.log(err));

            // save patients
            API.saveScheduler({
                id: Math.floor(Math.random() * 10000),
                text: this.state.name,                
                start: this.state.enterDate,                
                end: this.state.enterDate,
                resource: this.state.time,
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
                <Row >
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Add New Patient</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col size="md-12 sm-12">
                            <div>
                                <select className="form-control" id="lang" onChange={this.handleChange.bind(this)} value={this.state.doctorname}>
                                    {this.state.doctors.map(doctor => {
                                        return (
                                            <option key={doctor._id} value={doctor.username}>
                                                {doctor.name}
                                            </option>
                                        )
                                    })}
                                    {/* <option value="select">Select a doctor</option>
                                    <option value="Angular">Angular</option>
                                    <option value="Bootstrap">Bootstrap</option>
                                    <option value="React">React</option> */}
                                </select>
                                <h2>{this.state.doctorname}</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col size="md-12 as=12">
                        <DayPilotScheduler
                            startDate={DayPilot.Date.today().firstDayOfMonth()}
                            days={25}
                            scale={"Day"}
                            eventHeight={30}
                            cellWidth={50}
                            timeHeaders={[
                                { groupBy: "Month" },
                                { groupBy: "Day", format: "d" }
                            ]}
                            cellWidthSpec={50}
                            resources={[
                                { name: "9:00 AM", id: "A" },
                                { name: "10:00 AM", id: "B" },
                                { name: "11:00 AM", id: "C" },
                                { name: "12:00 PM", id: "D" },
                                { name: "1:00 PM", id: "E" },
                                { name: "2:00 PM", id: "F" },
                                { name: "3:00 PM", id: "G" },
                                { name: "4:00 PM", id: "H" },
                                { name: "5:00 PM", id: "I" },
                                { name: "6:00 PM", id: "J" }
                            ]}
                            events={this.state.schedulers.filter(scheduler => scheduler.doctorname === this.state.doctorname)}
                                
                            //     [{ id: 2, text: "Event 2", start: "2019/03/02", end: "2019/03/08", resource: "C", barColor: "#38761d", barBackColor: "#e69138", backColor: "#3c78d8" },
                            // { id: 3, text: "Event 3", start: "2019-03-02T00:00:00", end: "2019-03-08T00:00:00", resource: "D", barColor: "#f1c232", barBackColor: "#f1c232" }]}


                        // this.state.schedulers.filter(scheduler => scheduler.doctorname === "Jon123")}

                        >
                        </DayPilotScheduler>
                    </Col>
                </Row>
                <Row>
                    <Container>
                        <Col size="md-12 sm-12">
                            <Input
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                name="name"
                                placeholder="Patient Name (Required)">
                            </Input>
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
                                        {/* <h2>{this.state.time}</h2> */}
                                    </div>
                                </Col>
                                <Col size="md-6 sm-6">
                                    <Input
                                        value={this.state.enterDate}
                                        onChange={this.handleInputChange}
                                        name="enterDate"
                                        placeholder="YYYY-MM-DD (Required)">
                                    </Input>
                                    {/* <DatePicker
                                        format={"dd-MMM-yyyy HH:mm:ss"}
                                        onChange={this.onChange}
                                        value={this.state.date}
                                    /> */}
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
                <Row>
                    <Container>
                        <Col size="md-2 md-offset-1">
                            <Link to={{
                                pathname: '/adminPage'
                            }}
                            >← Back to Scheduler</Link>
                        </Col>
                    </Container>
                </Row>
            </Container>
        )

    }
}

export default AddPatient;