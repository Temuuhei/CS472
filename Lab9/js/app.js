"use strict";

const person = {
    name: "",
    dateOfBirth: null,
    getName: function () {
        return this.name;
    },
    setName: function (newName) {
        this.name = newName;
    },
};

const john = Object.create(person, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "John",
    },
    dateOfBirth: {
        value: new Date(1998, 11, 10),
    },

});
console.log("--------- Question 1 --------")
console.log("The person's name is " + john.getName());
console.log(
    john.getName() +
    " was born on " + john.dateOfBirth.getFullYear() +
    "-" + (john.dateOfBirth.getMonth() + 1) +
    "-" + john.dateOfBirth.getDate()
);

// 2. Given that an Employee IS-A person, applying JavaScript
// inheritance and the Object.create(…) method, create a generic object
// named, employee, with the following properties:
console.log("----------- Question 2 --------------");

const employee = Object.create(person, {
    salary: { writable: true, configurable: true, enumerable: true, value: 0},
    hireDate: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: new Date(),
    },
    doJob: {
        value: function (jobTitle) {
            return (
                this.name + " is a " + jobTitle + " who earns " + new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(this.salary)
            );
            
        }
    }
});

const anna = employee;
anna.setName("Anna");
anna.salary = 249995.50;
console.log(anna.doJob("Programmer"));

// 3. Re-write the person object specification described in Question 1
// above, but this time, using a Constructor Function named, Person.
// Then, add a method named, toString() to the person object, which
// return the string representation of the person object data in the
// format:
console.log("----------- Question 3 --------------");
// function Person(name, dateOfBirth) {
//     this.name = name,
//     this.dateOfBirth = dateOfBirth;
// }
function Person() {
    person.toString = function () {  
        return (
            "{Name: " + this.name + " , DateOfBirth: " +
            this.dateOfBirth.getFullYear() + 
            "-" + (this.dateOfBirth.getMonth() + 1) + 
            "-" +this.dateOfBirth.getDate() + "}"
        );    
    };
};

Person.prototype = person;
const peter = new Person();
peter.setName("Peter");
peter.dateOfBirth = new Date(1985, 10, 10);

console.log(peter.toString());