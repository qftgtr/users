'use strict';

import express from 'express';
import passport from 'passport';
import {signToken} from '../auth.service';

var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    var error = err || info;
    if (error) {
      return res.status(401).json(error);
    }
    if (!user) {
      return res.status(404).json({message: 'Something went wrong, please try again.'});
    }

    user.password = undefined;
    user.salt = undefined;
    var token = signToken(user._id, user.role);

    if (req.session) {
      req.session.user = user;
      req.session.token = token;
    }
    res.json({ token });
  })(req, res, next)
});

export default router;
