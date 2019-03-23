import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import { Select, Option } from "../components/Form";
// import Scheduler from "./Scheduler";

class Admin extends Component {
    state = {
        doctors: [],
        schedulers: [],
        patients: [],
        doctorName: "",
        value: ''
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
    change = () => {
        return document.querySelector('#lang').value;
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
                    <Container className="text-center">
                        <Col size="md-12 sm-12">
                            <h1>Selact Doctor</h1>
                        </Col>
                    </Container>
                    <Container>
                        <Select id="lang" >
                            {this.state.doctors.map(doctor => {
                                return (
                                    <Option key={doctor.name} value={doctor.name} onChange={this.change}>
                                        {doctor.name}
                                    </Option>
                                )
                            })}
                        </Select>
                    </Container>

                </Row>
                <Row>

                </Row>
                <Row>
                    <Col size="md-12 sm-12">
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
                            events={
                                [{ id: 2, text: "Event 2", start: "2019-03-03T00:00:00", end: "2019-03-03T00:00:00", resource: "A", barColor: "#38761d", barBackColor: "#93c47d" },
                                { id: 1, text: "Event 2", start: "2019-03-03T00:00:00", end: "2019-03-03T00:00:00", resource: "C", barColor: "#38761d", barBackColor: "#93c47d" },
                            ]}
                        // this.state.schedulers.filter(scheduler => scheduler.doctorname === "Jon123")
                        
                        // onEventMoved={args => {
                        //     console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
                        //     this.scheduler.message("Event moved: " + args.e.data.text);
                        // }}
                        // ref={component => { this.scheduler = component && component.control; }}
                        // onEventClick={args => {
                        //     console.log("Click : ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
                        // }}
                        items = {[ 
                            { 
                            text: "Something", 
                            onclick: function (args) { 
                            alert("You clicked: " + args.resource.id); 
                            } }]}
                        >
                        </DayPilotScheduler>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Admin;