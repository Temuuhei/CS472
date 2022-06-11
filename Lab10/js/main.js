"use strict";

// Question 1

import { Person } from "./model/person.js";

const persons = [];
persons.push(new Person("Anna Smith", new Date(1998, 11, 15)));
persons.push(new Person("Bob Jone", new Date(1945, 10, 16)));
persons.push(new Person("Carlos Slim Helu", new Date(1976, 8, 24)));

persons.forEach((person) => {
    console.log(person.toString());
});

// Question 2

import Employee from "./model/employee.js";

const jim = new Employee("Jim Hanson", new Date(1985, 11, 15), 245990.0, new Date(2022, 6, 9));
// print out the console
console.log(jim.doJob("Software Engineer"));
console.log("jim's to string : " + jim.toString());