const Log = require('../models/logs')

exports.addExercise = (req, res) => {
    newExercise = new Log({
        userId: req.body.userId,
        duration: req.body.duration,
        date: req.body.date,
        description: req.body.description
    })

    newExercise.save((err) => {
        if(err)
            return res.sendError(err)
        res.sendSuccess('New Exercise Recorded')
    })
}

exports.viewLogs = (req, res) => {

    if(!req.query.userId)
        return res.sendError(null, "Bad Request")
    
    let options = {};
    if(req.query.limit)
        options.limit = parseInt(req.query.limit)    
        
    let query = {userId: req.query.userId};
    if(req.query.from && req.query.to)
        query.date = {$gte: req.query.from, $lte: req.query.to}
    else if(req.query.from)
        query.date = {$gte: req.query.from}
    else if(req.query.to)
        query.date = {$lte: req.query.to}
        
    Log.find(query, null, options, (err, logs) => {
        if(err)
            return res.sendError(err)
        res.sendSuccess(logs, '')
    })
}