import express from 'express'
const router = express.Router()

import projects from '../components/projects/network'
import messages from '../components/messages/network'
import auth from '../components/auth/network'

router.use('/projects', projects)
router.use('/messages', messages)
router.use('/auth', auth)

export default router