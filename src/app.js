const express = require('express');
const app = express();
require('./db/connectdb')
const Note = require('./model/addNotes');

const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Show Data From MongooDB
app.get('/', async (req, res) => {
    try {
        const getNotes = await Note.find({})
        res.send(getNotes) 
        console.log(new Date().toLocaleString() + ' ' + 'Showing Notes!')    
    } catch(e) {
        res.status(500).send(e);
    }
})

// Add Data into MongooDB
app.post('/add', async (req, res) => {
    const addNotes = new Note(req.body);
    try {
        await addNotes.save()
        res.status(201).send(addNotes)
        console.log(new Date().toLocaleString() + ' ' + 'Adding Notes!')
    } catch(e) {
        res.status(400).send(e)
    }
})

// Show Data in ascending form
app.get('/ascend', async (req, res) => {
    try {
        const ascendNotes = await Note.find({}).sort({
            Numbers : 1
        })
        res.status(201).send(ascendNotes);
        console.log(new Date().toLocaleString() + ' ' + 'Showing Notes in ascending order!')
    } catch (e) {
        res.status(400).send(e)  
    }
    
})

// Show Data in descending form
app.get('/descend', async (req, res) => {
    try {
        const descendNotes = await Note.find({}).sort({
            Numbers : -1
        })
        res.status(201).send(descendNotes);
        console.log(new Date().toLocaleString() + ' ' + 'Showing Notes in descending order!')
    } catch (e) {
        res.status(400).send(e)  
    }
    
})

// Update Data By Id
app.patch('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['Notes', 'Numbers']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    const _id = req.params.id
    try {
        const updateNotesId = await Note.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        if (!updateNotesId) {
            res.status(404).send('ID NOT FOUND FOR UPDATE!')
            console.log(new Date().toLocaleString() + ' ' + 'ID NOT FOUND FOR UPDATE!');
        }
        res.send(updateNotesId)
        console.log(new Date().toLocaleString() + ' ' + 'Update Notes By Id!')
    } catch(e) {
        res.status(400).send()
    }
})

// Delete Data by Id
app.delete('/notes/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const deleteNotesId = await Note.findByIdAndDelete(_id)
        if (!deleteNotesId) {
            res.status(404).send('ID NOT FOUND FOR DELETE!')
            console.log(new Date().toLocaleString() + ' ' + 'ID NOT FOUND FOR DELETE!');
        }
        res.send(deleteNotesId)
        console.log(new Date().toLocaleString() + ' ' + 'Deleting Notes By Id!')
    } catch (e) {
        res.status(500).send()
    }
})

// Delete ALl Data
app.delete('/delete/all', async (req, res) => {
    try {
        const deleteAllNotes = await Note.remove({})
        res.send(deleteAllNotes)
        console.log(new Date().toLocaleString() + ' ' + 'Deleting All Notes!')  
    } catch (e) {
        res.status(500).send(e) 
    }
})

app.listen(port, () => {
    console.log(`This is the ${port} active port`);
});
