const express = require('express');
const Trainer = require('../models/TrainerModel')
const router = new express.Router();

// * Add Trainer Data into MongooDB Database
router.post('/addTrainer', async (req, res) => {
    const trainer = new Trainer({
        ...req.body
    })
    try {
        await trainer.save()

        console.log(new Date().toLocaleString() + ' ' + 'Loading To Add trainer...')

        res.status(201).send({status:true,data:trainer});
        console.log(new Date().toLocaleString() + ' ' + 'Adding trainer!')
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// * Read Trainer Data into MongooDB Database

router.get('/readTrainer', async (req, res) => {
    try {
      const trainer = await Trainer.find();
      console.log(new Date().toLocaleString() + ' ' + 'Loading To READ Trainer...')

      res.status(201).send({status:true,data:trainer});
      console.log(new Date().toLocaleString() + ' ' + 'READING Trainer!')
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

module.exports = router