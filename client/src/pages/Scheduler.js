import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";



class Scheduler extends Component {
    state = {
        schedulersdata: [],
        doctorsdata: [],
        id: "",
        text: "",
        start: "",
        end: "",
        resource: "",
        barColor: "",
        barBackColor: "",
        backColor: "",
        color: "",
        
    }
    componentDidMount() {
        this.loadSchedulers();
    }

    loadSchedulers = () => {
        API.getScheduler()
            .then(res =>
                this.setState({ schedulersdata: res.data, id: "", text: "", start: "", end: "", resource: "", barColor: "", barBackColor: "", backColor: "", color: "" })
                //id: "", text: "", start: "", end: "", resource: "", barColor: "", barBackColor: "", backColor: "", color: "" 
            )
            .catch(err => console.log(err));
        
    }

    
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12 sm-12">
                        <Jumbotron>
                            <h1>{this.props.match.params.name + "'s Schedule"}</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                               
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
                    events={this.state.schedulersdata.filter(schedulers => schedulers.doctorname === this.props.match.params.name)}
                    onEventClick={args => {
                        console.log("Event moved: ", args.e.data._id, args.e.data.id, args.e.data.text);
                        // const myid = args.e.data._id;
                        // args.newStart, args.newEnd, args.newResource
                        // this.scheduler.message("Event moved: " + args.e.data.text);
                        // <Link to={"/scheduler/"+ myid} >
                        // </Link>
                        window.location.assign("/scheduler/" + this.props.match.params.name + "/" + args.e.data._id);
                    }}
                    ref={component => { this.scheduler = component && component.control; }}
                />

            </Container>
        );
    }
}

export default Scheduler;