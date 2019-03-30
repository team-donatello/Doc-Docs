// import React, { Component } from 'react';
// import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
// import Zoom from "../DayPilot";
// import API from "../../utils/API";


// class Scheduler extends Component {
   

//     constructor(props) {
//         super(props);

//         this.state = {
//             // startDate: "2018-05-01",
//             startDate: DayPilot.Date.today().firstDayOfMonth(),
//             days: 31,
//             scale: "Day",
//             eventHeight: 30,
//             cellWidth: 50,
//             timeHeaders: [
//                 { groupBy: "Month" },
//                 { groupBy: "Day", format: "d" }
//             ],
//             //shell width
//             cellWidthSpec: "50",
//             //display timing 
//             resources: [
//                 { name: "9:00 AM", id: "A" },
//                 { name: "10:00 AM", id: "B" },
//                 { name: "11:00 AM", id: "C" },
//                 { name: "12:00 PM", id: "D" },
//                 { name: "1:00 PM", id: "E" },
//                 { name: "2:00 PM", id: "F" },
//                 { name: "3:00 PM", id: "G" },
//                 { name: "4:00 PM", id: "H" },
//                 { name: "5:00 PM", id: "I" },
//                 { name: "6:00 PM", id: "J" }
//             ],
//             //day appoinment            
//             events: [
//                 { id: 1, text: "Bob", start: "2019-03-02T00:00:00", end: "2019-03-02T00:00:00", resource: "A" },
//                 { id: 2, text: "Sara", start: "2019-03-03T00:00:00", end: "2019-03-03T00:00:00", resource: "C", barColor: "#38761d", barBackColor: "#93c47d", backColor: "#cc0000" , color: "white"},
//                 { id: 3, text: "Mark", start: "2019-03-02T00:00:00", end: "2019-03-02T00:00:00", resource: "D", barColor: "#f1c232", barBackColor: "#f1c232" ,backColor: "#e69138"},
//                 { id: 3, text: "Dylan", start: "2019-03-04T00:00:00", end: "2019-03-04T00:00:00", resource: "E", barColor: "#cc0000", barBackColor: "#ea9999", backColor: "#3c78d8" },
//                 { id: 4, text: "Bob", start: "2019-03-02T00:00:00", end: "2019-03-02T00:00:00", resource: "F" },
//                 { id: 5, text: "Sara", start: "2019-03-03T00:00:00", end: "2019-03-03T00:00:00", resource: "G", barColor: "#38761d", barBackColor: "#93c47d", backColor: "#cc0000" },
//                 { id: 6, text: "Mark", start: "2019-03-04T00:00:00", end: "2019-03-04T00:00:00", resource: "H", barColor: "#f1c232", barBackColor: "#f1c232" , backColor: "#e69138"},
//                 { id: 7, text: "Dylan", start: "2019-03-05T00:00:00", end: "2019-03-05T00:00:00", resource: "I", barColor: "#cc0000", barBackColor: "#ea9999",backColor: "#6aa84f" }
                
//             ]
//         };


//     }
//     zoomChange(args) {
//         switch (args.level) {
//             case "month":
//                 this.setState({
//                     startDate: DayPilot.Date.today().firstDayOfMonth(),
//                     days: DayPilot.Date.today().daysInMonth(),
//                     scale: "Day"
//                 });
//                 break;
//             case "week":
//                 this.setState({
//                     startDate: DayPilot.Date.today().firstDayOfWeek(),
//                     days: 7,
//                     scale: "Day"
//                 });
//                 break;
//             default:
//                 throw new Error("Invalid zoom level");
//         }
//     }

//     render() {
//     var { ...config } = this.state;

//     return (
//         <div>

//             <Zoom onChange={args => this.zoomChange(args)} />
//             <DayPilotScheduler
                       
//             {...config}
//             onEventClick={args => {
//                 window.onload = alert(localStorage.getItem("storageName"));

//                 console.log("Event moved: ", args.e.data.id, args.e.data.text, args.newStart, args.newEnd, args.newResource);
//                 this.scheduler.message("Event moved: " + args.e.data.text);

//             }}
//             ref={component => { this.scheduler = component && component.control; }}
//             />

//         </div>
//     );
//     }
// }

// export default Scheduler;
