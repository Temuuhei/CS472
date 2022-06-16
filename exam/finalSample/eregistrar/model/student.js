//student class goes here

"use strict";

class Student{
    studentID;
    fullName;
    levelOfStudy;
    constructor(studentID,fullName,levelOfStudy){
        this.studentID = studentID;
        this.fullName = fullName;
        this.levelOfStudy = levelOfStudy;
    }
}

module.exports = Student;