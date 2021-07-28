const express = require("express"); //call express server
const app = express(); //initialise express server
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const uri = process.env.ATLAS_URI;
const path = require("path")

const port = process.env.PORT || 3001; //define and initialise port

const EmployeeModel = require("./models/Employee");

app.use(express.static(path.join(__dirname, "client", "build")))
app.use(cors());
app.use(express.json()); //recieve info from frontend in json format

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open',() => {
  console.log("MongoDB databse connection established successfully");
});

const employeesRouter = require('./routes/employees');
const departmentsRouter = require('./routes/departments');

app.use('/employees', employeesRouter);
app.use('/departments', departmentsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`); 
});