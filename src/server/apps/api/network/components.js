import express from 'express'
const router = express.Router()

import projects from '../components/projects/network'
import messages from '../components/messages/network'

router.use('/projects', projects)
router.use('/messages', messages)

export default router