const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    }
});

UserSchema.methods.welcomeUser = () => {
    let welcomeMsg = `Welcome to exercise tracker ${this.username}, have a fun time exercising`;
    console.log(this)
    return welcomeMsg
}

const User = module.exports = mongoose.model('User', UserSchema)

