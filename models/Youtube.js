const mongoose = require('mongoose')

const Youtube = mongoose.model('Youtube', {
    title:String,
    time:String,
    user:Object
})

module.exports = Youtube