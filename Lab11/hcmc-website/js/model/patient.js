/* 
* patient.js
*
* @author Temka
* @since 2022-06-10
*
*/ 

"use strict"

export class Patient {
    #patientId = null;
    #firstName = null;
    #middleInitial = null;
    #lastName = null;
    #dateOfBirth = null;
    #department = null;
    #isOutPatient = null;

    constructor(patientId, firstName, middleInitial, lastName, dateOfBirth, department, isOut ) {
        this.#patientId = patientId;
        this.#firstName = firstName;
        this.#middleInitial = middleInitial;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
        this.#department = department;
        this.#isOutPatient = isOut;
    }

    getPatientId () {
        return this.#patientId;
    }
    getFirstName () {
        return this.#firstName;
    }
    getMiddleInital () {
        return this.#middleInitial;
    }
    getLastName () {
        return this.#lastName;
    }
    getDateOfBirth () {
        return this.#dateOfBirth;
    }
    getDepartment () {
        return this.#department;
    }
    getIsOutPatient () {
        return this.#isOutPatient;
    }

    setPatientId(newVal) {
        this.#patientId = newVal;
    }
    setFirstName(newVal) {
        this.#firstName = newVal;
    }
    setMiddleInital(newVal) {
        this.#middleInitial = newVal;
    }
    setLastName(newVal) {
        this.#lastName = newVal;
    }
    setDateOfBirth(newVal) {
        this.#dateOfBirth = newVal;
    }
    setDepartment(newVal) {
        this.#department = newVal;
    }
    setIsOutPatient(newVal) {
        this.#isOutPatient = newVal;
    }

    getAge() {
        const currDate = new Date();
        const diffDate = currDate.getTime() - this.#dateOfBirth.getTime();
    
        return Math.floor(diffDate / (1000 * 60 * 60 * 24 * 365.25));
      }

    toString() {
        return `Patient ID : ${this.#patientId}
                First Name : ${this.#firstName}
                Miidle Initial : ${this.#middleInitial}
                Last Name : ${this.#lastName}
                Date of Birth : ${this.#dateOfBirth}
                Department : ${this.#department}
                Is Out Patient : ${this.#isOutPatient}
                `;
    }
}