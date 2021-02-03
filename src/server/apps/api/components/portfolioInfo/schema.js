import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    heroText: {type: String, required: true},
    cvUrl: {type: String, required: true},
    aboutMessage: {type: String, required: true},
    aboutImage: {type: String, required: true},
    contactText: {type: [String], required: true},
    email: {type: String, required: true},
    github: {type: String, required: false},
    linkedin: {type: String, required: false},
    youtube: {type: String, required: false},
})

export default mongoose.model('info', projectSchema)