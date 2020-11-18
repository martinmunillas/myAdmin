import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    mail: {type: String, required: true},
    message: {type: String, required: true},
    isRead: {type: Boolean, required: true},
    date: {type: Date, required: true},
})

export default mongoose.model('messages', projectSchema)