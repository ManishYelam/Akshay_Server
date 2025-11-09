const express = require('express');
const { authenticate } = require('../Middlewares/authorizationMiddleware');
const authRouter = require('./authRoutes');
const applicationRouter = require('./applicationPropertiesRoutes');
const { userRouter, adminRouter, studentRouter } = require('./userRoutes');
const genericRouter = require('./GenericRoutes');
const fileRouter = require('./fileRoutes');
const contactRouter = require('./contactRoutes');
const paymentRouter = require('./paymentRoutes');
const supportRouter = require('./supportRoutes');
const feedbackRouter = require('./feedbackRoutes');
const courseRouter = require('./coursesRoutes');

const router = express.Router();

router
  .use('/', authRouter)
  .use('/admin', adminRouter)
  .use('/student', studentRouter)
  .use('/users', userRouter)
  .use('/application', authenticate, applicationRouter)
  .use('/generics', authenticate, genericRouter)
  .use('/files', authenticate, fileRouter)
  .use('/courses', courseRouter)
  .use('/contact', contactRouter)
  .use('/payment', paymentRouter)
  .use('/support', supportRouter)
  .use('/feedback', feedbackRouter);

module.exports = router;
