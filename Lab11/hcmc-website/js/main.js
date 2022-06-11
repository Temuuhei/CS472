/* 
* main.js for Lab 11
*
* @author Temka
* @since 2022-06-10
*
*/

"use strict"

import { Patient } from "./model/patient.js";

// using JQuery

$(document).ready(function () {
    console.log("hereee");
    const patients = [];

    $("#formPatient").submit(event => {
        event.preventDefault();
        const patientId = $("#patientIdNumber").val();
        const firstName = $("#firstName").val();
        const middleName = $("#middleInitials").val();
        const lastName = $("#lastName").val();
        // attention how to get date value to variable by Date
        const dateOfBirth = new Date($("#dateOfBirth").val());
        const department = $("#ddlDepartment").val();
        //  attention how to get radio button's checked value by name
        const outPatient = $("[name = 'radioIsOutPatient']:checked").val();

        const patient = new Patient(patientId, firstName, middleName, lastName, dateOfBirth, department, outPatient);
        console.log(patient.toString());
        patients.push(patient);
        registerPatient(patient);

        $("#patientIdNumber").val("");
        $("#firstName").val("");
        $("#middleInitials").val("");
        $("#lastName").val(""); 
        $("#dateOfBirth").val("");
        // $('#ddlDepartment').val($(this).find('option:first').val());
        $("#ddlDepartment option:eq(0)").prop("selected", true);
        // $("#ddlDepartment").prop("selectedIndex", -1);
        $("[name = 'radioIsOutPatient']").prop("checked", false);
    });



    // add new patient to table
  function registerPatient(patient) {
    // const tbPatients = document.querySelector("#tbPatients > tbody");
    const tbPatients = document.querySelector("#tbPatients");
    const newRow = tbPatients.insertRow(-1);

    const newCellPatientID = newRow.insertCell(0);
    const strNewRowPatientID = document.createTextNode(
      `${patient.getPatientId()}`
    );
    newCellPatientID.appendChild(strNewRowPatientID);

    const newCellFirstName = newRow.insertCell(1);
    const strNewRowFirstName = document.createTextNode(
      `${patient.getFirstName()}`
    );
    newCellFirstName.appendChild(strNewRowFirstName);

    const newCellMiddleName = newRow.insertCell(2);
    const strNewRowMiddleName = document.createTextNode(
      `${patient.getMiddleInital()}`
    );
    newCellMiddleName.appendChild(strNewRowMiddleName);

    const newCellLastName = newRow.insertCell(3);
    const strNewRowLastName = document.createTextNode(
      `${patient.getLastName()}`
    );
    newCellLastName.appendChild(strNewRowLastName);

    const newCellDateOfBirth = newRow.insertCell(4);
    const strNewRowDateOfBirth = document.createTextNode(
      `${new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
      }).format(patient.getDateOfBirth())}`
    );
    newCellDateOfBirth.appendChild(strNewRowDateOfBirth);

    const newCellDepartment = newRow.insertCell(5);
    const strNewRowDepartment = document.createTextNode(
      `${patient.getDepartment()}`
    );
    newCellDepartment.appendChild(strNewRowDepartment);

    const newCellOutPatient = newRow.insertCell(6);
    const strNewRowOutPatient = document.createTextNode(
      `${patient.getIsOutPatient()}`
    );
    newCellOutPatient.appendChild(strNewRowOutPatient);
    console.log("Patients created");
  };

//   Show Elderly Patients only
// An Elderly Patient is any patient who is of age, 65 or older
$("#chkElderlyPatients").on("click", function (event) {
    if (patients.length > 0) {
        console.log("Show Elderly Patients only");
        $("#tbPatients").empty();
        let data  = [];
        // Checking "Show Out-Patients only checkbox" is checked?
        if($("#chkShowOutPatients").prop("checked")) {
            data = patients.filter((patient) => patient.getIsOutPatient() === "Yes");
        } else {
            data = patients;
        }
        // Checking "Show Elderly Patients only checkbox" is checked?
        if($("#chkElderlyPatients").prop("checked")) {
            data = data.filter((patient) => patient.getAge() > 64);
        }

        data.forEach((patient) => registerPatient(patient));
    }
});

$("#chkShowOutPatients").on("click", function (event) {
    if(patients.length > 0) {
        console.log("Show Out-Patients only");
        $("#tbPatients").empty();
        let data = [];
        // Checking "Show Elderly Patients only checkbox" is checked?
        if($("#chkElderlyPatients").prop("checked")) {
            data = data.filter((patient) => patient.getAge() > 64);
        }
        // Checking "Show Out-Patients only checkbox" is checked?
        if($("#chkShowOutPatients").prop("checked")) {
            data = patients.filter((patient) => patient.getIsOutPatient() === "Yes");
        } else {
            data = patients;
        }
        data.forEach((patient) => registerPatient(patient));
    }
});


// Patient 1:
// 		Patient ID Number: EP-001-000001,
// First Name: Ana,
// 		Middle Initial(s): J,
// 		Last Name: Smith,
// 		Date of birth: 5 January 1945
// 		Department: Ear, Nose and Throat,
// 		Is out-patient?: No
// Patient 2:
// 		Patient ID Number: P-001-000002,
// First Name: Bob,
// 		Middle Initial(s): K,
// 		Last Name: Jones,
// 		Date of birth: 4 May 1985
// 		Department: Cardiology,
// 		Is out-patient: Yes
// Patient 3:
// 		Patient ID Number: EP-001-000003,
// First Name: Carlos,
// 		Middle Initial(s): A,
// 		Last Name: Hernandez,
// 		Date of birth: 13 March 1957
// 		Department: Cardiology,
// 		Is out-patient: Yes



});
