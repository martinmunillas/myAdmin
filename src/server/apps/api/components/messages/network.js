import express from 'express'
const router = express.Router()

import response from '../../network/response'

import service from './service'

router.get('/', async (req, res) => {
    try {
        const projects = await service.getMessages()
        response.success(req, res, 200, 'Messages retrieved correctly', projects)
    } catch (error) {
        response.error(req, res, 500, error.message, error)
    }
    
})

router.post('/', async (req, res) => {
    try {
        const projects = await service.sendMessage(req.body)
        response.success(req, res, 200, 'Message sent succesfully', projects)
    } catch (error) {
        response.error(req, res, 500, error.message, error)
    }
    
})

router.delete('/:id', async (req, res) => {
    try {
        const projects = await service.deleteMessage(req.params.id)
        response.success(req, res, 200, 'Message deleted correctly', projects)
    } catch (error) {
        response.error(req, res, 500, error.message, error)
    }
    
})


export default router