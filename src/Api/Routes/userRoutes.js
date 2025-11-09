const express = require('express');
const validateAsync = require('../Middlewares/validateAsyncMiddleware');
const { authenticate, authorize } = require('../Middlewares/authorizationMiddleware');
const { createUserSchema, updateUserSchema } = require('../Middlewares/Joi_Validations/userSchema');
const userController = require('../Controllers/UserController');
const adminController = require('../Controllers/adminController');
const courseController = require('../Controllers/courseController');
const uploadPublicMiddleware = require('../Middlewares/uploadPublicMiddleware');

const userRouter = express.Router();
const adminRouter = express.Router();
const studentRouter = express.Router();

userRouter
  .post('/email', userController.checkExistsEmail)
  .post('/', validateAsync(createUserSchema), userController.createUser)
  .post('/verify', userController.verifyCreateUser)
  .post('/resend-verification', userController.resendVerification)
  .get('/', authenticate, userController.getAllUsers)
  .post('/v2', authenticate, userController.getAllUsersV2)
  .get('/:id', userController.getUserById)
  // .put('/:id', authenticate, validateAsync(updateUserSchema), userController.updateUser)
  .put('/:id', userController.updateUser)
  .delete('/:id', authenticate, userController.deleteUser)
  .delete('/user_range/:start_id/to/:end_id', authenticate, userController.deleteUserRanges);

adminRouter
  .use(authenticate)
  .use(authorize('admin'))

  .get('/dashboard', adminController.getDashboard)
  .get('/students', adminController.getStudents);

studentRouter
  .get('/', courseController.getAllCourses)
  .get('/featured', courseController.getFeaturedCourses)
  .get('/:id', courseController.getCourseById)
  .get('/slug/:slug', courseController.getCourseBySlug)

  .post('/', authenticate, authorize('admin'), courseController.createCourse)
  .put('/:id', authenticate, authorize('admin'), courseController.updateCourse);

module.exports = {
  userRouter,
  adminRouter,
  studentRouter,
};
