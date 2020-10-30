import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    service: {type: String, required: true},
    description: {type: String, required: true},
    mainImage: {type: String, required: true},
    images: {type: [String], required: true},
    repos: {type: [String], required: true},
    demos: {type: [String], required: true},
})

export default mongoose.model('projects', projectSchema)