import express from 'express'
const router = express.Router()

import auth from '../components/auth/network'
import projects from '../components/projects/network'
import messages from '../components/messages/network'
import toDos from '../components/toDos/network'
import portfolioInfo from '../components/portfolioInfo/network'

router.use('/auth', auth)
router.use('/projects', projects)
router.use('/messages', messages)
router.use('/toDos', toDos)
router.use('/info', portfolioInfo)

export default router