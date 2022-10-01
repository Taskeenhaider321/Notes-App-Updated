const express = require('express');
const User = require('../model/userModel')
const auth = require('../middleware/auth')
const router = new express.Router();

// Signing up User 
router.post('/signup', async (req, res) => {
    const user = new User(req.body);
    if (req.body.password!= req.body.confirmPassword) {
        res.status(200).send('Password doesnot match')

    }
    try {
        await user.save()
        const token = await user.generateAuthToken()
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Creating Users ...')
        res.status(201).send({user, token})
        console.log(new Date().toLocaleString() + ' ' + 'Creating the Users!')
    } catch(e) {
        res.status(400).send(e.message)
    }
})

// Log In User
router.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();
        console.log(new Date().toLocaleString() + ' ' + 'Loading To LogIn...')
        res.send({user, token})
        console.log(new Date().toLocaleString() + ' ' + 'Log In User!')
    } catch (e) {
        res.status(400).send(e.message)
    }
})

// Log Out User
router.post('/user/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save();
        console.log(new Date().toLocaleString() + ' ' + 'Loading To LogOut...')
        res.send({message: "Successfully Log out!"});
        console.log(new Date().toLocaleString() + ' ' + 'Log Out User!')
    } catch (e) {
        res.status(500).send()
    }
})

// Log Out User
router.post('/user/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save();
        console.log(new Date().toLocaleString() + ' ' + 'Loading To LogOut All...')
        res.send({message: "Successfully Log out!"});
        console.log(new Date().toLocaleString() + ' ' + 'Log Out User All Sessions!')
    } catch (e) {
        res.status(500).send()
    }
})

// Delete ALl Data
router.delete('/delete/alluser', async (req, res) => {
    try {
        const deleteAllUser = await User.remove({})
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Delete All Users...')        
        res.send(deleteAllUser)
        console.log(new Date().toLocaleString() + ' ' + 'Deleting All Users!')  
    } catch (e) {
        res.status(500).send(e) 
    }
})

// Read Data of Authorized User From MongooDB
router.get('/read/me', auth, async (req, res) => {
    console.log(new Date().toLocaleString() + ' ' + 'Loading To Read By Authorized User...')
    res.send(req.user)
    console.log(new Date().toLocaleString() + ' ' + 'Read Data By Authorized User!')
})

// Read Data From MongooDB
router.get('/readUser', async (req, res) => {
    try {
        const readUser = await User.find({})
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Read Users...')
        res.send(readUser) 
        console.log(new Date().toLocaleString() + ' ' + 'Reading Users!')    
    } catch(e) {
        res.status(500).send(e);
    }
})

// Update Data By Id
router.patch('/updateUser/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName', 'lastName' , 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    const _id = req.params.id
    try {
        const updateUsers = await User.findOne({_id, owner: req.user._id})
        if (!updateUsers) {
            res.status(404).send('ID NOT FOUND FOR UPDATE!')
            console.log(new Date().toLocaleString() + ' ' + 'ID NOT FOUND FOR UPDATE!');
        }
        updates.forEach((update) => {
            updateUsers[update] = req.body[update]
        })
        await updateUsers.save()
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Update By Id...')
        res.send(updateUsers)
        console.log(new Date().toLocaleString() + ' ' + 'Update Users By Id!')
    } catch(e) {
        res.status(400).send()
    }
})

// Delete Data of Log In User
router.delete('/userDelete/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        console.log(new Date().toLocaleString() + ' ' + 'Loading To Delete By Id...')
        res.send(req.user)
        console.log(new Date().toLocaleString() + ' ' + 'Deleting Users By Id!')
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
















































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





        // const deleteUserById = await User.findByIdAndDelete(id)
        // if (!deleteUserById) {
        //     res.status(404).send('ID NOT FOUND FOR DELETE!')
        //     console.log(new Date().toLocaleString() + ' ' + 'ID NOT FOUND FOR DELETE!');
        // }
        // await req.user.remove()
        // console.log(new Date().toLocaleString() + ' ' + 'Loading To Delete By Id...')
        // res.send(deleteUserById)














