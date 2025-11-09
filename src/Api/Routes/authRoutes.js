const express = require('express');
const AuthController = require('../Controllers/AuthController');
const validate = require('../Middlewares/validateMiddleware');
const { loginSchema, changePasswordSchema, resetPasswordSchema } = require('../Middlewares/Joi_Validations/authSchema');
const { authenticate } = require('../Middlewares/authorizationMiddleware');

const authRouter = express.Router();

authRouter
  .post('/login', AuthController.login)
  .post('/logout', authenticate, AuthController.logout)
  .post('/change-password', validate(changePasswordSchema), authenticate, AuthController.changePassword)
  .post('/change-password-otp/:email', validate(resetPasswordSchema), AuthController.resetPassword)
  .post('/forget-password/:email', AuthController.forgetPassword)

  .get('/organization', AuthController.getOrganization)
  .post('/organization', authenticate, AuthController.upsertOrganization);

module.exports = authRouter;
