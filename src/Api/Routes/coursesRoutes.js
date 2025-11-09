const express = require('express');
const courseController = require('../Controllers/courseController');
const { courseCreateSchema, courseUpdateSchema } = require('../Middlewares/Joi_Validations/courseSchema');
const { authenticate, authorize } = require('../Middlewares/authorizationMiddleware');
const validate = require('../Middlewares/validateMiddleware');

const courseRouter = express.Router();

courseRouter
  .post('/', courseController.getAllCourses)
  .get('/featured', courseController.getFeaturedCourses)
  .get('/:id', courseController.getCourseById)
  .get('/slug/:slug', courseController.getCourseBySlug)

  .post('/', authenticate, authorize('admin'), validate(courseCreateSchema), courseController.createCourse)
  .put('/:id', authenticate, authorize('admin'), validate(courseUpdateSchema), courseController.updateCourse);

module.exports = courseRouter;
