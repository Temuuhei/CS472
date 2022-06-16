/**
 * 
 * 
 */

"use strict";

const dataStore = require("../datastore/datastore");
const Student = require("../model/student");

const registrationController = (function(){
    const getRegistrations = function(req, res){
        return dataStore.getData();
    }
    const registerNewStudent = function(req, res){
        const studentID = req.body.studentId;
        const fullName = req.body.fullName;
//IMPORTANT FOR SELECT IN REGISTRATION.PUG : ID = levelOfStudy
        const levelOfStudy = req.body.levelOfStudy;
        //there should be parsing here irl, we're just passing strings
        const newStudent = new Student(studentID, fullName, levelOfStudy);
        dataStore.saveData(newStudent);
        console.log(`saving new Student: ${studentID} ${fullName} ${levelOfStudy}`);
    }
    return {
        getRegistrations: getRegistrations,
        registerNewStudent: registerNewStudent
    }
})();

module.exports = registrationController;
