import React, { Component } from 'react';
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import Zoom from "../DayPilot";

// let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week);

class Scheduler extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // startDate: "2018-05-01",
            startDate: DayPilot.Date.today().firstDayOfMonth(),
            days: 31,
            scale: "Day",
            eventHeight: 30,
            cellWidth: 50,
            timeHeaders: [
                { groupBy: "Month" },
                { groupBy: "Day", format: "d" }
            ],
            //shell width
            cellWidthSpec: "50",
            //display timing 
            resources: [
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
            ],
            //day appoinment
            events: [
                { id: 1, text: "Bob", start: "2019-03-02T00:00:00", end: "2019-03-02T00:00:00", resource: "A" }
            ]
        };


    }
    zoomChange(args) {
        switch (args.level) {
            case "month":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfMonth(),
                    days: DayPilot.Date.today().daysInMonth(),
                    scale: "Day"
                });
                break;
            case "week":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfWeek(),
                    days: 7,
                    scale: "Day"
                });
                break;            
            default:
                throw new Error("Invalid zoom level");
        }
    }
    getEvents(){
        return [{ id: 1, text: "Bob", start: "2019-03-02T00:00:00", end: "2019-03-02T00:00:00", resource: "A" }]
    }
    componentDidMount(){
        let dbEvents = this.getEvents();
        this.setState({
            //get appointments from database
            events: dbEvents //array of event objects
            //
        })

    }
    
    render() {
        var { ...config } = this.state;

        return (
            <div>
                <Zoom onChange={args => this.zoomChange(args)} />
                <DayPilotScheduler
                    // schedulerData={schedulerData}
                    {...config}
                    onEventClick={args => {
                        console.log("Event moved: ", args.e.data.id,args.e.data.text, args.newStart, args.newEnd, args.newResource);
                        this.scheduler.message("Event moved: " + args.e.data.text);
                        
                    }}
                    ref={component => { this.scheduler = component && component.control; }}
                />

            </div>
        );
    }
}

export default Scheduler;
