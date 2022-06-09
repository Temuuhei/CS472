// "use strict";

/* 6. Consider the following definition of an add() function to increment a counter variable: */

let count = (function() {
    let counter = 0; // 7. free variable
    let add = function () {
        return (counter += 1);
    };
    let reset = function() {
        return (counter = 0);
    };
    let getCounter = function() {
        return (counter);
    }
    return {
        add: add,
        reset: reset,
        getCounter : getCounter
    };
})();
count.add();
count.add();
console.log("after two add called :" +count.getCounter());
console.log("count module is : " + count);
count.reset();
console.log("after reset function called counter is : " + count.getCounter());

/* To add() function defined in question 6 always adds 1 to the counter each time it is called. 
Write a definition of a function make_adder(inc), whose return value is an add function 
with increment value inc (instead of 1). Here is an example of using this function: */

var mak_adder = function(inc) {
    var privateCounter = 0;
  
    function changeBy(val) {
      privateCounter += val;
    }
    return {
        add: function() {
        changeBy(inc);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }
  };
  var counter1 = mak_adder(5);
  var counter2 = mak_adder(7);
  console.log(counter1.value()); /* initital value 0 */
  counter1.add();
  counter1.add();
  counter1.add();
  console.log(counter1.value()); /* 15 */
  counter2.add();
  counter2.add();
  counter2.add();
  console.log(counter2.value()); /* 21 */

/* 10. Using the Revealing Module Pattern, write a Javascript definition of a Module that creates an Employee Object with the following fields and methods: */
let employee = (function () {
    let name,age,salary;
    // private
    let getName = function () {
        return name;
    };

    let setName = function(newName) {
        name = newName;
    };
    // private
    let getAge = function() {
        return age;
    };

    let setAge = function(newAge) {
        age = newAge;
    };
    // private
    let getSalary = function() {
        return salary;
    };

    let setSalary = function(newSalary) {
        salary = newSalary;
    };

    let incrementAge = function() {
        setAge(getAge() + 1);
        return getAge();
    };

    let incrementSalary = function(percentage) {
        let tmpSalary = getSalary();
        setSalary(tmpSalary + tmpSalary * (percentage / 100));
        return getSalary();
    };

    let toString = function() {
        return getName() + " " + getAge() + " " + getSalary();
    };
    return {
        setName : setName,
        setAge : setAge,
        setSalary: setSalary,
        incrementAge : incrementAge,
        increaseSalary : incrementSalary,
        toString : toString

    };

}
)();
employee.setName("Temka");
employee.setAge(32);
employee.setSalary(120000);
employee.incrementAge();
employee.increaseSalary(30);
console.log(employee.toString());

/* 11. Write a few Javascript instructions to extend the Module of Question 10 to have a public address field and public methods setAddress(newAddress) and getAddress(). */

employee.address = "";
employee.setAdress = (newAddress) => {
    address = newAddress;
};
employee.getAdress = () => {
    return address;
};


employee.setAdress("1000N 8th St, IA 52556");
console.log(employee.getAdress());