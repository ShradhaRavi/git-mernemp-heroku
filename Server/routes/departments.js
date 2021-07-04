const router = require('express').Router();
let Dept = require('../models/Department');
router.route('/').get((req,res) => {
    Dept.find()
        .then(departments => res.json(departments))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    const DeptNum = req.body.DeptNum;
    const DeptName = req.body.DeptName;    
    const newDept = new Dept({DeptNum, DeptName});
    newDept.save()
        .then(() => res.json('Department added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
