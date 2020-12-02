import express from 'express';
import passport from 'passport';

import response from '../../network/response';
import service from './service';
import scopesValidationHandler from '../../utils/middlewares/scopesValidationHandler';

const router = express.Router();

require('../../utils/auth/jwt');

router.get('/', async (req, res) => {
  try {
    const projects = await service.getProjects();
    response.success(req, res, 200, 'Projects retrieved correctly', projects);
  } catch (error) {
    response.error(req, res, 500, error.message, error);
  }
});

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['projects']),
  async (req, res) => {
    try {
      const projects = await service.addProject(req.body);
      response.success(req, res, 200, 'Project created correctly', projects);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['projects']),
  async (req, res) => {
    try {
      const projects = await service.updateProject(req.params.id, req.body);
      response.success(req, res, 200, 'Project updated correctly', projects);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['projects']),
  async (req, res) => {
    try {
      const projects = await service.deleteProject(req.params.id);
      response.success(req, res, 200, 'Project deleted correctly', projects);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

export default router;
