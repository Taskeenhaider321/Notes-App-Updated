const express = require('express');
const Note = require('../model/notesModel')
const auth = require('../middleware/auth')
const router = new express.Router();

// Create and Add Data into MongooDB
router.post('/createNote', auth, async (req, res) => {
    const note = new Note({
        ...req.body,
        owner : req.user._id
    })
    try {
        await note.save()
        // const token = await note.generateAuthToken()
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Creating Notes...')
        // res.status(201).send({note, token})
        res.status(201).send(note);
        console.log(new Date().toLocaleString() + ' ' + 'Creating of Notes!')
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// Read Data From MongooDB
router.get('/readNotesAll', async (req, res) => {
    try {
        const readNotes = await Note.find({})
        // await req.user.populate('notes')
        // res.send(req.user.notes)
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Read Notes...')
        res.send(readNotes) 
        console.log(new Date().toLocaleString() + ' ' + 'Reading Notes!')    
    } catch(e) {
        res.status(500).send(e);
    }
})
router.get('/readNotes/me', auth, async (req, res) => {
    console.log(new Date().toLocaleString() + ' ' + 'Loading To Read By Authorized User...')
    const readNotes = await Note.find({owner: req.user._id})
    res.send(readNotes)
    console.log(new Date().toLocaleString() + ' ' + 'Read Data By Authorized User!')
})

// Show Data in ascending form
router.get('/ascend', async (req, res) => {
    try {
        const ascendNotes = await Note.find({}).sort({
            Numbers : 1
        })
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Ascending form...')
        res.status(201).send(ascendNotes);
        console.log(new Date().toLocaleString() + ' ' + 'Showing Notes in ascending order!')
    } catch (e) {
        res.status(400).send(e)  
    }
    
})

// Show Data in descending form
router.get('/descend', async (req, res) => {
    try {
        const descendNotes = await Note.find({}).sort({
            Numbers : -1
        })
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Descending form...')
        res.status(201).send(descendNotes);
        console.log(new Date().toLocaleString() + ' ' + 'Showing Notes in descending order!')
    } catch (e) {
        res.status(400).send(e)  
    }
    
})

// Update Data By Id
router.patch('/updateNotes/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['Notes', 'Numbers']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    const _id = req.params.id
    try {
        const updateNotes = await Note.findOne({_id, owner: req.user._id})
        if (!updateNotes) {
            res.status(404).send('ID NOT FOUND FOR UPDATE!')
            console.log(new Date().toLocaleString() + ' ' + 'ID NOT FOUND FOR UPDATE!');
        }
        updates.forEach((update) => {
            updateNotes[update] = req.body[update]
        })
        await updateNotes.save()
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Update By Id...')
        res.send(updateNotes)
        console.log(new Date().toLocaleString() + ' ' + 'Update Notes By Id!')
    } catch(e) {
        res.status(400).send()
    }
})

// Delete All Notes By Authorized Person
router.delete('/userDeleteAllNotes/me', auth, async (req, res) => {
    try {
        const deleteAllNotes = await Note.remove({owner:req.user._id})
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Delete All Notes...')        
        res.send(deleteAllNotes)
        console.log(new Date().toLocaleString() + ' ' + 'Deleting All Notes!')  
    } catch (e) {
        res.status(500).send(e) 
    }
})

// Delete Data by Id
router.delete('/deleteNotes/:id', auth ,async (req, res) => {
    const _id = req.params.id
    try {
        const deleteNotesById = await Note.findOneAndDelete({_id, owner: req.user._id})
        if (!deleteNotesById) {
            res.status(404).send('ID NOT FOUND FOR DELETE!')
            console.log(new Date().toLocaleString() + ' ' + 'ID NOT FOUND FOR DELETE!');
        }
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Delete By Id...')
        res.send(deleteNotesById)
        console.log(new Date().toLocaleString() + ' ' + 'Deleting Notes By Id!')
    } catch (e) {
        res.status(500).send()
    }
})

// Delete ALl Data
router.delete('/deleteAll', async (req, res) => {
    try {
        const deleteAllNotes = await Note.remove({})
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Delete All Notes...')        
        res.send(deleteAllNotes)
        console.log(new Date().toLocaleString() + ' ' + 'Deleting All Notes!')  
    } catch (e) {
        res.status(500).send(e) 
    }
})

module.exports = router









































// Read Data By Id
// router.get('/notes/:id', auth ,async (req, res) => {
//     const _id = req.params.id;
//     try {
//         const note = await Note.findOne({_id, owner: req.user._id})
//         if (!note) {
//             return res.status(404).send()
//         }
//         res.send(note)
//     } catch(e) {
//         res.status(500).send(e)
//     }
// })






// Log Out All
// router.post('/user/logoutall', auth, async (req, res) => {
//     try {
//         req.user.tokens = []
//         await req.user.save();
//         res.send();
//     } catch (e) {
//         res.status(500).send()
//     }
// })




















