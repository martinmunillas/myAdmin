import express from 'express'
const router = express.Router()

import projects from '../components/projects'

router.use('/projects', projects)

export default router