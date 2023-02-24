const express = require('express');
const MonthlyPlan = require('../models/MonthlyPlanModel')
const router = new express.Router();

// * Add Monthly Plan Data into MongooDB Database
router.post('/addMonthlyPlan', async (req, res) => {
    const monthlyPlan = new MonthlyPlan({
        ...req.body
    })
    try {
        await monthlyPlan.save()

        console.log(new Date().toLocaleString() + ' ' + 'Loading To Add Monthly Plan...')

        res.status(201).send({status:true,data:monthlyPlan});
        console.log(new Date().toLocaleString() + ' ' + 'Adding Monthly Plan!')
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// * Read MonthlyPlan Data into MongooDB Database

router.get('/readMonthlyPlan', async (req, res) => {
    try {
      const monthlyPlan = await MonthlyPlan.find();
      console.log(new Date().toLocaleString() + ' ' + 'Loading To READ MonthlyPlan...')

      res.status(201).send({status:true,data:monthlyPlan});
      console.log(new Date().toLocaleString() + ' ' + 'READING MonthlyPlan!')
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

module.exports = router