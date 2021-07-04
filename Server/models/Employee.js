const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema(
    {
        EmployeeSSN:{
            type: Number,
            required: true,
        },
        Fname:{
            type: String,
            required: true,
        },
        Lname:{
            type: String,
            required: true,
        },
        DOB:{
            type: Date,
            required: true,
        },
        Sex:{
            type: String,
            required: true,
        },
        PhoneNumber:{
            type: Number,
            required: true,
        },
        DeptNum:
        {
            type: Number,
            required: true,            
        },
    },
    {timestamps: true});

const Employee = mongoose.model("employeeData",EmployeeSchema);
module.exports = Employee;