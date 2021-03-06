import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import response from '../../network/response';
import userService from './userService';

const router = express.Router();
dotenv.config();

require('../../utils/auth/basic');

router.post('/sign-in', async (req, res) => {
  passport.authenticate('basic', async (error, user) => {
    try {
      if (error || !user) {
        return response.error(req, res, 401, 'Unauthorized');
      }

      req.login(user, { session: false }, async (error) => {
        if (error) {
          return response.error(req, res, error.message, error);
        }

        const { _id: id, name, email } = user;

        const payload = {
          sub: id,
          name,
          email,
        };

        const token = jwt.sign(payload, process.env.AUTH_JWT, {
          expiresIn: '15m',
        });

        return res.status(200).json({ token, user: { id, name, email } });
      });
    } catch (error) {
      return response.error(req, res, 401, error.message, error);
    }
  })(req, res);
});

router.post('/sign-up', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const createdUser = await userService.createUser(req.body);
    response.success(req, res, 201, 'User created correctly', createdUser);
  } catch (error) {
    return response.error(req, res, error.message, error);
  }
});

export default router;
