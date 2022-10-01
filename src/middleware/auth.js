const User = require('../model/userModel')
const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decode = jwt.verify(token, 'thisisthesecret')
        const user = await User.findOne({_id : decode._id, 'tokens.token' : token})
        if (!user) {
            throw new error()
        }
        req.token = token 
        req.user = user
        next()
        console.log(new Date().toLocaleString() + ' ' + 'Token is Authenticated')
    } catch (e) {
        res.status(401).send({error: 'Please Authenticate!'})
    }
}
module.exports = auth