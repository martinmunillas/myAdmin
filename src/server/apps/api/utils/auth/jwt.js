import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

import userService from '../../components/auth/userService';

dotenv.config();

passport.use(
  new Strategy(
    {
      secretOrKey: process.env.AUTH_JWT,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, cb) => {
      const user = await userService.getUser(payload.email);
      if (!user) {
        cb('Unauthorized', false);
      }

      delete user.password;

      return cb(null, { ...user, scopes: payload.scopes });
    }
  )
);
