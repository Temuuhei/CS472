/* 
* account.js
*
* @author Temka
* @since 2022-06-10
*
*/ 

"use strict"

import { Account } from "./model/account.js";
// console.log("Hello MiniBank APP " + Account);

// Avoid polluting the Global Environment
// Method 1 

// (function () {
//     console.log("Wrapper minibankapp module loaded");
//     const formNewAccount = document.getElementById("formNewAccount");
//     formNewAccount.addEventListener("submit", createAccount);
//     function createAccount() {
//         console.log("Account Created");
//     }
// })();

// // Method 2 using window.onload
// window.onload = function () {
//     console.log("minibankapp module loaded via window.onload");
//     const formNewAccount = document.getElementById("formNewAccount");
//     formNewAccount.addEventListener("submit", createAccount);
//     function createAccount() {
//         console.log("Account Created");
// }

// Method 3 : using JQuery
$(document).ready(function() {
    console.log("minibankapp module via JQuery");
    const accountsData = [];

    $("#formNewAccount").submit(function(event) {
        event.preventDefault();
        const accountNo = $("#txtAccountNo").val();
        const customerName = $("#txtCustomerName").val();
        const accountType = $("#ddlAccountType").val();
        // const accountData = `AccountNo: ${accountNo}\nCustomerName: ${customerName}\nAccountType: ${accountType}`;
        // alert(accountData);
        const newAccount = new Account(accountNo, customerName, accountType);
        accountsData.push(newAccount);
        createAccount(newAccount, accountsData.length);
        // clear the fields
        $("#txtAccountNo").val("");
        $("#txtCustomerName").val("");
        $("#ddlAccountType").val("");
    });

    function createAccount(newAccount, numAccounts) {
        const tblAccounts = document.querySelector("#tblAccounts");
        const newRow = tblAccounts.insertRow(-1);
        const newCellRowId = newRow.insertCell(0);
        // already 2 rows in table !
        const nextRowId = numAccounts + 2;
        const strNewRowId = document.createTextNode(`${nextRowId}.`);
        newCellRowId.appendChild(strNewRowId); //a
        const newCellAccountNo = newRow.insertCell(1);
        const strNewRowAccountNo = document.createTextNode(`${newAccount.getAccountNo()}`);
        newCellAccountNo.appendChild(strNewRowAccountNo);
        const newCellCustomerName = newRow.insertCell(2);
        const strNewRowCustomerName = document.createTextNode(`${newAccount.getCustomerName()}`);
        newCellCustomerName.appendChild(strNewRowCustomerName);
        const newCellAccountType = newRow.insertCell(3);
        const strNewRowAccountType = document.createTextNode(`${newAccount.getAccountType()}`);
        newCellAccountType.appendChild(strNewRowAccountType);
        console.log("Account created");
    }
})











// Original Temka's shit
// let number = 3;
// $("#submit").on("click", function(event) {

//     /*  Attach a delegated event handler--handles dynamically added items */
//     //$( "#list" ).on( "click", "a", function( event ) {
//     console.log("button clicked");
//     event.preventDefault(); //don't want to follow the link for this example
//     console.log($(this).text());
//     $("#tblData").append(`<tr>
//         <td>${number}</td>
//         <td>${$("#txtAccountNo").val()}</td>
//         <td>${$("#txtCustomerName").val()}</td>
//         <td>${$("#ddlAccountType").val()}</td>
//      </tr>`);
//      number++;
// });