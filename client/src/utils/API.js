import axios from "axios";

export default {
    // Gets all doctors
    getDoctors: function() {
        return axios.get("/api/doctors");
    },

    // Gets all schedulers
    getScheduler: function() {
        return axios.get("/api/scheduler");
    },
    //get the scheduler with given id 
    getSchedulerWithID: function(id) {
        return axios.get("/api/scheduler/" + id);
    },

    // Gets all schedulers
    getPatientDetails: function() {
        return axios.get("/api/patients");
    },
    
}