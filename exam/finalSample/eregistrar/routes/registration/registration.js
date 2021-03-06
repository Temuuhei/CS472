/**
 * 
 * 
 */
"use strict";

const express = require("express");
const path = require("path");
const registrationController = require("../../controller/registrationController");

const registrationRouter = express.Router();

registrationRouter.get("/", (req,res) =>{
    const registrationdata = registrationController.getRegistrations();
    res.render("./public/registration/registration", {registrations: registrationdata});
});

registrationRouter.post("/new", (req, res) =>{
    registrationController.registerNewStudent(req, res);
    res.redirect(303,"/registration");
});

module.exports = registrationRouter;