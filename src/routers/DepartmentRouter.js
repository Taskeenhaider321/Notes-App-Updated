const express = require('express');
const Department = require('../models/DepartmentModel')
const router = new express.Router();

// * Add Department Data into MongooDB Database

router.post('/addDepartment', async (req, res) => {
    const department = new Department({
        ...req.body
    })
    try {
        await department.save()

        console.log(new Date().toLocaleString() + ' ' + 'Loading To Add Department...')

        res.status(201).send({status:true,data:department});
        console.log(new Date().toLocaleString() + ' ' + 'Adding Department!')
    } catch(e) {
        res.status(400).json({ message: e.message })
    }
})

// * Read Department Data into MongooDB Database

router.get('/readDepartment', async (req, res) => {
    try {
      const department = await Department.find();
      console.log(new Date().toLocaleString() + ' ' + 'Loading To READ Department...')

      res.status(201).send({status:true,data:department});
      console.log(new Date().toLocaleString() + ' ' + 'READING Department!')
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
  

module.exports = router






//   // Get a specific department by ID
//   router.get('/:id', getDepartment, (req, res) => {
//     res.json(res.department);
//   });
  
//   // Middleware function to get a department by ID
//   async function getDepartment(req, res, next) {
//     try {
//       const department = await Department.findById(req.params.id);
//       if (department == null) {
//         return res.status(404).json({ message: 'Cannot find department' });
//       }
//       res.department = department;
//       next();
//     } catch (err) {
//       return res.status(500).json({ message: err.message });
//     }
//   }