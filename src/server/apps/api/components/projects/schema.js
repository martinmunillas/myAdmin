import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    service: {type: String, required: true},
    description: {type: String, required: true},
    mainImage: {type: String, required: true},
    video: {type: String, required: false},
    images: {type: [String], required: false},
    repo: {type: String, required: false},
    demo: {type: String, required: false},
    isVisible: {type: Boolean, required: true},
})

export default mongoose.model('projects', projectSchema)