const express = require('express');
const cors = require('cors');

const app = express()
require("dotenv").config()


const port = 4000;



app.use(cors())

app.listen(process.env.PORT || port, () => {
    console.log(`Server Running @ PORT:${port}`);
});

app.get("/", (request, response) => {
    response.send("Welcome to MY PORTFOLIO")
    response.download("resume.pdf");
});