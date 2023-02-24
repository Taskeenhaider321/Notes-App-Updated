const express = require('express');
const Training = require('../models/TrainingModel')
const router = new express.Router();

// * Add Training Data into MongooDB Database
router.post('/addTraining', async (req, res) => {
    const training = new Training({
        ...req.body
    })
    try {
        await training.save()

        console.log(new Date().toLocaleString() + ' ' + 'Loading To Add training...')

        res.status(201).send({status:true,data:training});
        console.log(new Date().toLocaleString() + ' ' + 'Adding training!')
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// * Read Training Data into MongooDB Database

router.get('/readTraining', async (req, res) => {
    try {
      const training = await Training.find();
      console.log(new Date().toLocaleString() + ' ' + 'Loading To READ Training...')

      res.status(201).send({status:true,data:training});
      console.log(new Date().toLocaleString() + ' ' + 'READING Training!')
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

module.exports = router