const express = require('express');
const Employee = require('../models/EmployeeModel')
const router = new express.Router();

// * Add Employee Data into MongooDB Database
router.post('/addEmployee', async (req, res) => {
    const employee = new Employee({
        ...req.body
    })
    try {
        await employee.save()

        console.log(new Date().toLocaleString() + ' ' + 'Loading To Add Employee...')

        res.status(201).send({status:true,data:employee});
        console.log(new Date().toLocaleString() + ' ' + 'Adding Employee!')
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// * Read Employee Data into MongooDB Database

router.get('/readEmployee', async (req, res) => {
    try {
      const employee = await Employee.find();
      console.log(new Date().toLocaleString() + ' ' + 'Loading To READ Employee...')

      res.status(201).send({status:true,data:employee});
      console.log(new Date().toLocaleString() + ' ' + 'READING Employee!')
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

module.exports = router