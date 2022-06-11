import { Person } from "./person.js";

class Employee extends Person {
    constructor(name, dateOfBirth, salary, hireDate) {
        super(name, dateOfBirth);
        this._salary = salary;
        this._hireDate = hireDate;
    }

    getSalary() {
        return this._salary;
    }

    getHireDate() {
        return this._hireDate;
    }
    doJob(jobTitle) {
        return `${super.getName()} is a ${jobTitle} who earns ${new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(this._salary)}`
    }

    // btw this belove code can work and i just tried override to toString function
    // toString() {
    //     // super.toString() ;
    //     // console.log("heree inherited tostring");
    //     const year = this._dateOfBirth.getFullYear();
    //     const month = this._dateOfBirth.getMonth() + 1;
    //     const day = this._dateOfBirth.getDate();

    //     return `{ Name : ${this._name}, DateOfBirth : ${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}}
    //             hireDate : ${this._hireDate} 
    //             salary : ${this.getSalary()}
    //             doJob : ${this.doJob("Mechanic")}`;
    // }
}

export default Employee;