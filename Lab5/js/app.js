"use strict";

/* Define a function max() that takes two numbers as arguments and returns the largest of them. 
Use the if-then-else construct available in Javascript.*/
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
document.getElementById("result1").innerText = max(5, 12);
/* 2. Define a function maxOfThree() that takes three numbers as
      arguments and returns the largest of them.*/

function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else return z;
}

document.getElementById("result2").innerText = maxOfThree(1, 2, 3);

/* 3.Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/
function isVowel(x) {
    let vowels = "TemkainDaHouse";
    if (vowels.includes(x)) {
        return true;
    } else
        return false
}
document.getElementById("result3").innerText = isVowel("a");

/* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. 
For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)*/
function sum() {
    let sum = 0;
    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
    }
    return sum;
}
document.getElementById("result4").innerText = sum(1, 2, 3, 4);

function multiply() {
    let multiply = 1;
    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            multiply *= arguments[i];
        }
    }
    return multiply;
}
document.getElementById("result5").innerText = multiply(1, 2, 3, 4);

/* 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".*/
function reverseF(str) {
    let reverseResult = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseResult += str[i];
    }
    return reverseResult;
}

document.getElementById("result6").innerText = reverseF("TemkainDaHouse");

/* 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/

function findLongestWord(input) {
    if (input.length > 0) {
        let longestWordLength = input[0].length;
        let longestWord = input[0];
        for (let i = 1; i < input.length; i++) {
            if (longestWordLength < input[i].length) {
                longestWord = input[i];

            }
        }
        return longestWord;
    }
}

document.getElementById("result7").innerText = findLongestWord(["Temka", "in", "the", "House", "America"]);

/*7. Write a function filterLongWords() that takes an array of words and an integer i and 
returns a new array containing only those words that were longer than i characters.*/

function filterLongWords(arr, i) {
    return arr.filter((word) => word.length > i);
}

document.getElementById("result8").innerText = filterLongWords(["Temka", "in", "the", "House", "America"], 3);

/* 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array. 
E.g. computeSumOfSquares([1,2,3]) should be computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. 
Do NOT use any explicit looping construct; instead use functional programming style/approach.*/

function computeSumOfSquares(arr) {
    return arr.map((perValue) => Math.pow(perValue, 2) + 0)
        .reduce((preVal, curValue) => preVal + curValue);
}

document.getElementById("result9").innerText = computeSumOfSquares([1, 2, 3]);

/*9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and 
prints only the numbers which are odd.*/
function printOddNumbersOnly(arr) {
    let a = arr.filter((i) => i % 2 !== 0);
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    return a;
}
document.getElementById("result10").innerText = printOddNumbersOnly([1, 2, 3, 4, 5, 6, 7]);

/* 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.*/

function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter((i) => i % 2 === 0)
        .map((val) => Math.pow(val, 2) + 0)
        .reduce((preValue, currValue) => preValue + currValue);

}

document.getElementById("result11").innerText = computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]);
/* 11 Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.  */

function sumReduc(arr) {
    return arr.reduce((preVal, currVal) => preVal + currVal);
}

function multiplyReduce(arr) {
    return arr.reduce((preVal, currVal) => preVal * currVal, 1);
}

document.getElementById("result12").innerText = "sum by reduce → " + sumReduc([1, 2, 3, 4]) + ", multiply by reduce  → " + multiplyReduce([1, 2, 3, 4]);

/* 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)  */

function findSecondBiggest(arr) {
    let firstBig = -Infinity;
    let secondBig = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstBig) {
            secondBig = firstBig;
            firstBig = arr[i];
        } else {
            if (arr[i] > secondBig) secondBig = arr[i];
        }
    };
    return secondBig;
};

document.getElementById("result13").innerText = findSecondBiggest([19, 9, 11, 0, 12]);

/* 13. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output). */

function printFibo(n, a, b) {
    let val1 = a;
    let val2 = b;
    let str = "";
    for (let i = 0; i <= n; i++) {
        str += val1 + ", ";
        let tmp = val1 + val2;
        val1 = val2;
        val2 = tmp;
    };
    return str.substring(0, str.length - 2);
}

document.getElementById("result14_1").innerText = printFibo(1, 0, 1);
document.getElementById("result14_2").innerText = printFibo(2, 0, 1);
document.getElementById("result14_3").innerText = printFibo(3, 0, 1);
document.getElementById("result14_4").innerText = printFibo(6, 0, 1);
document.getElementById("result14_5").innerText = printFibo(10, 0, 1);

/* 14.     14. Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:

        a. Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
        b. New Product Form: Add code such that when the Submit button is clicked, the values entered in the input fields are displayed in a pop-up window.*/
        
function loginSubmit() {
    const url = document.getElementById("url");
    const email = document.getElementById("email");
    console.log("URL: " + url.value);
    console.log("Email: " + email.value);
    document.getElementById("result15_1").innerText = "URL: " + url.value;
    document.getElementById("result15_2").innerText = "Email: " + email.value;
}

function addProduct() {
    const productNo = document.getElementById("productNo");
    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const qty = document.getElementById("quantity");
    const supplier = document.getElementById("supplier");
    const date = document.getElementById("date");

    alert(
        "Product number: " + productNo.value + "\n" +
        "Name: " + name.value + "\n" + 
        "Unit price: " + price.value + "\n" +
        "Quantity: " + qty.value + "\n" +
        "Supplier: " + supplier.value + "\n" +
        "Date: " + date.value
      );

    document.getElementById("result15b_1").innerText = "Product Number : " + productNo.value;
    document.getElementById("result15b_2").innerText = "Name : " + name.value;
    document.getElementById("result15b_3").innerText = "Price : " + price.value;
    document.getElementById("result15b_4").innerText = "Quantity : " + qty.value;
    document.getElementById("result15b_5").innerText = "Supplier  : " + supplier.value;
    document.getElementById("result15b_6").innerText = "Date  : " + date.value;
}

/* 15. Using JavaScript and HTML and CSS, implement a webpage that displays a working, ticking counter Clock, that counts/displays the current Date and time of the browser host, in the format: 2019-11-4 12:16:01  */ 
function clock() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    let fullClock =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

    document.getElementById("clock").innerText = fullClock;
    setTimeout(clock,1000)
};
clock()