import mongoose from 'mongoose'

const toDoSchema = new mongoose.Schema({
    task: {type: String, required: true},
    date: {type: Date, required: true},
})

export default mongoose.model('toDos', toDoSchema)