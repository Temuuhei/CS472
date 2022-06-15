const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended : true}));
app.use("/css", express.static(__dirname + "/css"));

// define initial homepage on server
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/SimpleCalculator.html");
});

app.get("/back", (req, res) => {
    res.redirect("/");
});

app.post("/calculate", (req, res, next) => {
    let result = 0;
    const firstNumber = parseInt(req.body.first);
    const secondNumber = parseInt(req.body.second);
    const operation = req.body.operation;
    switch (operation) {
        case "add":
            result = firstNumber + secondNumber ;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
            break;
    }
    res.status(200).send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset=\"utf-8\"/>
            <title>Calculator Web Site</title>
            <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
            <p> The ${operation} is : <span>${String(new Intl.NumberFormat().format(result))}</span></p>
            <p><a href="/back">Another Calculator</a></p>
        </body>
        </html>
    `);
});


app.listen(port, () => {
    console.log(`Web Server started on port ${port}`);
})