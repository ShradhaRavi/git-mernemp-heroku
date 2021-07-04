const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema(
    {
        DeptNum:
        {
            type: Number,
            required: true,
            unique: true,
        },
        DeptName:
        {
            type: String,
            required: true,
        },
    },
    {timestamps: true});

const Department = mongoose.model("DepartmentData",DepartmentSchema);
module.exports = Department;

