const User = require('../models/user')

exports.registerUser = (req, res) => {
    newUser = new User({username: req.body.username})

    newUser.save((err, newUser) => {
        if(err)
            return res.sendError(err)
        res.sendSuccess("New user registered")
    })
} 