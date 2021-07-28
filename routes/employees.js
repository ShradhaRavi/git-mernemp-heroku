const router = require('express').Router();
let Emp = require('../models/Employee');

//GET action for an employee
router.route('/').get((req,res) => {
    Emp.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json('Error: ' +err));
});

//POST action for an employee
router.route('/add').post((req,res) => {
    const EmployeeSSN = Number(req.body.EmployeeSSN);
    const Fname = req.body.Fname;
    const Lname = req.body.Lname;
    const DOB = Date.parse(req.body.DOB);
    const Sex = req.body.Sex;
    const PhoneNumber = Number(req.body.PhoneNumber);
    const DeptNum = Number(req.body.DeptNum);
    const newEmployee = new Emp({
        EmployeeSSN, 
        Fname, 
        Lname, 
        DOB, 
        Sex, 
        PhoneNumber, 
        DeptNum});

    newEmployee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

//To find by ID
router.route('/:id').get((req,res) => {
    Emp.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json('Error: '+err));
});

//To delete an employee
router.route('/:id').delete((req,res) => {
    Emp.findByIdAndDelete(req.params.id)
        .then(employee => res.json('Employee deleted'))
        .catch(err => res.status(400).json('Error: '+err));
});

//To update an employee
router.route('/update/:id').post((req,res) => {
    Emp.findById(req.params.id)
        .then(employee => {
            employee.EmployeeSSN = Number(req.body.EmployeeSSN);
            employee.Fname = req.body.Fname;
            employee.Lname = req.body.Lname;
            employee.DOB = Date.parse(req.body.DOB);
            employee.Sex = req.body.Sex;
            employee.PhoneNumber = Number(req.body.PhoneNumber);
            employee.DeptNum = Number(req.body.DeptNum);
            employee.save()
                .then(() => res.json('Employee updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});



module.exports = router;