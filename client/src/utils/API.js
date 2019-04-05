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
    // Saves a patient to the database
    savePatients: function(patientData){
        return axios.post("/api/patients", patientData);
    },
    // Saves a scheduler to the database
    saveScheduler: function(schedulerData){
        return axios.post("/api/scheduler", schedulerData);
    },
    // Saves a Doctor to the database
    saveDoctor: function(doctorData){
        return axios.post("/api/doctors", doctorData);
    },
    confirmationmail: function(mailData){
        return axios.post("/api/confirmationmail", mailData);
    }, 
    // Update a scheduler to the database
    updateScheduler: function(id, schedulerData){
        return axios.put("/api/scheduler/"+id, schedulerData);
    },
    updatePatient(id, drugData){
        return axios.put("/api/patients/"+id, drugData);
    }  
    
}