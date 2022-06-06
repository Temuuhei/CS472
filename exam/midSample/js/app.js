'use strict';
window.onload = function() {
    const myform = document.getElementById("mainForm");
    function clock() {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1;
        let day = currentDate.getDate();
        let hour = currentDate.getHours();
        let minute = currentDate.getMinutes();
        let second = currentDate.getSeconds();
        let date = currentDate.getUTCDate();
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
    
        let add = hour > 12 ? "PM" : "AM";
    
        let fullClock =
            year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + " " + add;
    
        document.getElementById("clock").innerText = fullClock;
        setTimeout(clock, 1000)
    };
    clock();
    myform.addEventListener("submit", event => {
        console.log("Enter submit");
        event.preventDefault();
        const patientId = document.getElementById("patientId").value;
        const firstName = document.getElementById("firstName").value;
        const middleInital = document.getElementById("middleInitial").value;
        const lastName = document.getElementById("lastName").value;
        const dateOfBirth = document.getElementById("dateOfBirth").value;
        const department = document.getElementById("department").value;
        const isOutPatient = document.getElementsByName("outPatient");
        var selected = Array.from(isOutPatient).find(radio => radio.checked);

        alert( "Patient ID No: " + patientId + "\n" +
                "First Name : " + firstName + "\n" +
                "Middle Initial : " + middleInital + "\n" +
                "Last Name : " + lastName + "\n" +
                "Date of Birth : " + dateOfBirth + "\n" +
                "Department : " + department + "\n" +
                "Out-Patients ? : " + selected.value 
                );
    })
}