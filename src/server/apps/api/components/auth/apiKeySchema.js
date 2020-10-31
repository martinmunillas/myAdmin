import mongoose from 'mongoose'

const apiSchema = new mongoose.Schema({
    token: {type: String, required: true},
    scopes: {type: [String], required: true},
})

export default mongoose.model('api-keys', apiSchema)