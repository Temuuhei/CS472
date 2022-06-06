"use strict";
function clock() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();
    let date = currentDate.getUTCDate();
    console.log(date);
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let add = hour > 12 ? "PM" : "AM";

    let fullClock =
        year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + " " + add;

    document.getElementById("spnDateTime").innerText = fullClock;
    setTimeout(clock, 1000)
};
clock()
window.onload = function () {
    const myForm = document.getElementById("mainForm");
    myForm.addEventListener("submit", event => {
        console.log("hereeee");
        event.preventDefault();
        const fullName = document.getElementById("fullName");
        const citizenId = document.getElementById("citizenId");
        const ssnId = document.getElementById("ssnId");
        const state = document.getElementById("state");
        const isSenior = myForm.elements["radBtnSnrCitizen"];
        const formData =`
            Full Name : ${fullName.value}
            Citizen ID : ${citizenId.value}
            Social Security Number : ${ssnId.value}
            State : ${state.value}
            Is a Senior Citizen : ${isSenior.value}
        `;
        alert(formData);
        // fullName.value = "";
        // citizenId.value = "";
        // ssnId.value = "";
        // state.value = "";
        // fullName.value = "";


    })
}
