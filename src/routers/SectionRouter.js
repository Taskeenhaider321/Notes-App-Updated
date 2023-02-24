const express = require('express');
const Section = require('../models/SectionModel')
const router = new express.Router();

// * Add Section Data into MongooDB Database
router.post('/addSection', async (req, res) => {
    const section = new Section({
        ...req.body
    })
    try {
        await section.save()

        console.log(new Date().toLocaleString() + ' ' + 'Loading To Add section...')

        res.status(201).send({status:true,data:section});
        console.log(new Date().toLocaleString() + ' ' + 'Adding section!')
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// * Read Section Data into MongooDB Database

router.get('/readSection', async (req, res) => {
    try {
      const section = await Section.find();
      console.log(new Date().toLocaleString() + ' ' + 'Loading To READ Section...')

      res.status(201).send({status:true,data:section});
      console.log(new Date().toLocaleString() + ' ' + 'READING Section!')
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

module.exports = router