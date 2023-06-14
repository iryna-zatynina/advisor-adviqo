const { Schema, model, Types } = require('mongoose')

const advisorSchema = new Schema({
    icon: {type: String, required: true}, 
    fullName: {type: String, required: true},
    status: {type: String, required: true},
    reviews: {type: Number, required: true},
    onSiteSince: {type: String, required: true},
    language: {type: String, required: true}
})

module.exports  = model('Advisor', advisorSchema)