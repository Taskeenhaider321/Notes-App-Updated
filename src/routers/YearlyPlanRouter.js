const express = require('express');
const YearlyPlan = require('../models/YearlyPlanModel')
const router = new express.Router();

// * Add Yearly Plan Data into MongooDB Database
router.post('/addYearlyPlan', async (req, res) => {
    const yearlyPlan = new YearlyPlan({
        ...req.body
    })
    try {
        await yearlyPlan.save()

        console.log(new Date().toLocaleString() + ' ' + 'Loading To Add Yearly Plan...')

        res.status(201).send({status:true,data:yearlyPlan});
        console.log(new Date().toLocaleString() + ' ' + 'Adding Yearly Plan!')
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// * Read YearlyPlan Data into MongooDB Database

router.get('/readYearlyPlan', async (req, res) => {
    try {
      const yearlyPlan = await YearlyPlan.find();
      console.log(new Date().toLocaleString() + ' ' + 'Loading To READ YearlyPlan...')

      res.status(201).send({status:true,data:yearlyPlan});
      console.log(new Date().toLocaleString() + ' ' + 'READING YearlyPlan!')
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

module.exports = router