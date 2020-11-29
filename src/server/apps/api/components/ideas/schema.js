import mongoose from 'mongoose'

const ideaSchema = new mongoose.Schema({
    idea: {type: String, required: true},
})

export default mongoose.model('ideas', ideaSchema)