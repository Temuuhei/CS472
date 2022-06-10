import { Person } from "./person.js";

class Employee extends Person {
    constructor(name, dateOfBirth, salary, hireDate) {
        super(name,dateOfBirth);
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
            style : "currency",
            currency: "USD",
        }).format(this._salary)}`
    }
}

export default Employee;