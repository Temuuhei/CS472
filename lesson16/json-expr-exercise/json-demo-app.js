/**
 * 
 */
"use strict";

// sample code
// const employee = {
//     "employees1 " : [{
//             "EmpId":1,
//             "SSN":"123-45-67",
//             "FullName":"Usain Bolt",
//             "DateOfBirth":"1996-12-3",
//             "Salary":15005.95,
//             "Email":{},
//         },{
//             "EmpId":2,
//             "SSN":"123-45-68",
//             "FullName":"Anna-Marie Rodriguez",
//             "DateOfBirth":"2000-5-21",
//             "Salary":4562.00,
//             "Email":"amrod@gmail.mx"
//         },{
//             "EmpId":3,
//             "SSN":"123-45-69",
//             "FullName":"Victor Luiz Garcia",
//             "DateOfBirth":"1998-11-7",
//             "Salary":17750.05,
//             "Email":{}
//         }
//     ]
//     };
// console.log(employee["employees1 "][0].Email);


// const obj = {
//     "window": {
//         "title": "Sample Widget",
//         "width": 500,
//         "height": 500
//     },
//     "image": {
//         "src": "images/logo.png",
//         "coords": [250, 150, 350, 400],
//         "alignment": "center"
//     },
//     "messages": [
//         {"text": "Save", "offset": [10, 30]},
//         {"text": "Help", "offset": [ 0, 50]},
//         {"text": "Quit", "offset": [30, 10]}
//     ],
//     "debug": "true"
// };

const jsonString = `{
    "window": {
        "title": "Sample Widget",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "images/logo.png",
        "coords": [250, 150, 350, 400],
        "alignment": "center"
    },
    "messages": [
        {"text": "Save", "offset": [10, 30]},
        {"text": "Help", "offset": [ 0, 50]},
        {"text": "Quit", "offset": [30, 10]}
    ],
    "debug": "true"
}`;
// console.log(jsonString);
const data = JSON.parse(jsonString);
const windowTitle = data.window.title;
console.log(windowTitle);
console.log(data.image.coords[2]);
console.log(data.messages.length);
