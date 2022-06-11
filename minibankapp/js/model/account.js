/* 
* account.js
*
* @author Temka
* @since 2022-06-10
*
*/ 

"use strict"

export class Account {
    #accountNo = null;
    #customerName = null;
    #accountType = null;

    constructor(accountNo, customerName, type) {
        this.#accountNo = accountNo;
        this.#customerName = customerName;
        this.#accountType = type;
    }

    getAccountNo() { 
        return this.#accountNo; 
    }
    getCustomerName () {
        return this.#customerName;
    };

    getAccountType() {
        return this.#accountType;
    }

    setAccoountNo (newAccountNumber) {
        this.#accountNo = newAccountNumber;
    }

    setCustomerName (newName) {
        this.#customerName = newName;
    }

    setAccountType (newType) {
        this.#accountType = newType;
    }

    toString() {
        return `{AccountNo : ${this.#accountNo}, 
        CustomerName : ${this.#customerName}, 
        AccountType : ${this.#accountType}}`
    };
}