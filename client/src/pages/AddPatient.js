import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import "../components/style/addPatient.css"

class AddPatient extends Component {
    state = {
        freeDoctorArry: [],
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
        let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        
        let start = new DayPilot.Date.today().firstDayOfWeek();
        for (let y = 1; y <= 10; y++) {
            for (let x = 0; x < 31; x++) {
                let id = x + "_" + y;
                this.state.freeDoctorArry.push({
                    id: id,
                    resource: arr[y - 1],
                    start: start.addDays(x),
                    end: start.addDays(x + 1),
                    text: "",
                    // barColor: "#38761d",
                    // barBackColor: "#93c47d"
                });
            }
        }
        // console.log(this.state.freeDoctorArry);       
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
    }
    handleChange(e) {
        this.setState({
            doctorname: e.target.value,
        })
    }

    // generateEvents = () => {
   
    //     const doctorEvents = this.state.schedulers.filter(scheduler => scheduler.doctorname === this.state.doctorname);
    
    //     const withoutDoctors = []
    
    //     for(let i=0; i < this.state.freeDoctorArry.length; i++) {
    //         const fda = this.state.freeDoctorArry[i];

    //         let doctorEventExists = false;

    //         for(var j=0; j < doctorEvents.length; j++) {
    //             const de = doctorEvents[j];
    //             if( de.start === fda.start.value && de.end === fda.end.value){
    //                 doctorEventExists = true;
    //             }
    //         }

    //         if(!doctorEventExists) {
    //             withoutDoctors.push(fda);
    //         }
    //     }
        
        
    //     // this.state.freeDoctorArry.filter(fda => {
    //     //     const foundEvents = doctorEvents.filter(de => {
    //     //         return  de.start !== fda.start.value || de.end !== fda.end.value}
    //     //         );

    //     //     return foundEvents.length !== doctorEvents.length;
    //     // })

    //     console.log(doctorEvents);
    //     console.log(withoutDoctors);

    //     let events = doctorEvents.concat(withoutDoctors);
        

    //     return events;
    // }
    
    render() {
        return (
            <Container fluid>
                <Row >
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>Doctor {this.state.doctorname} Patient</h1>
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
                                </select>
                                {/* <h2>{this.state.doctorname}</h2> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col size="md-12 as=12" >
                        <DayPilotScheduler
                            startDate={DayPilot.Date.today().firstDayOfWeek()}
                            days={31}
                            scale={"Day"}
                            eventHeight={30}
                            cellWidth={70}
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
                            events={[...this.state.schedulers.filter(scheduler => scheduler.doctorname === this.state.doctorname), ...this.state.freeDoctorArry]}
                                //this.generateEvents()}
                            ref={component => { this.scheduler = component && component.control; }}
                            onEventClick={args => {
                                console.log("Click : ", args.e.data.id, args.e.data.resource, args.e.data.start);
                                
                                let modal = new DayPilot.Modal({
                                    id: args.e.data.id,
                                    // onClosed: function(args) {
                                    //     console.log("Modal dialog closed");
                                    //   },
                                });
                                modal.showUrl("/addPatientSchedule/" + args.e.data.start+"/"+args.e.data.resource+"/"+this.state.doctorname);
                            }}
                            onEventMoved={args => {
                                console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
                                this.scheduler.message("Appointment Change : " + args.e.data.text +"  Date : "+ args.newEnd);
                                API.updateScheduler(args.e.data.id,
                                    {                                                         
                                    start: args.newEnd,
                                    end: args.newEnd,
                                    resource: args.newResource
                                })
                                // .then(res => this.setState({ schedulers: res.data }))
                                .catch(err => console.log(err));
                            }}
                        >
                        </DayPilotScheduler>
                    </Col>
                </Row>
                
                <Row>
                    <Container>
                        <Col size="md-4 md-offset-1">
                            <Link to={{
                                pathname: '/adminPage'
                            }}
                            >← Back to Admin Page</Link>
                        </Col>
                    </Container>
                </Row>
            </Container>
        )

    }
}

export default AddPatient;