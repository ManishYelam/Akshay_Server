const express = require('express');
const { authenticate } = require('../Middlewares/authorizationMiddleware');
const roleAuth = require('../Middlewares/roleAuth');
const validate = require('../Middlewares/validateMiddleware');
const {
  submitFeedback,
  getUserFeedback,
  getAllFeedback,
  updateStatus,
} = require('../Middlewares/Joi_Validations/feedbackValidation');
const feedbackController = require('../Controllers/feedbackController');
const feedbackRouter = express.Router();

// Routes
feedbackRouter
  .post('/submit', authenticate, validate(submitFeedback), feedbackController.submitFeedback)
  .get('/my-feedback', authenticate, validate(getUserFeedback), feedbackController.getUserFeedback)

  // Admin only routes
  .get('/', authenticate, roleAuth(['admin']), validate(getAllFeedback), feedbackController.getAllFeedback)
  .get('/stats', authenticate, roleAuth(['admin']), feedbackController.getFeedbackStats)
  .get('/:id', authenticate, feedbackController.getFeedbackById)
  .patch('/:id/status', authenticate, roleAuth(['admin']), validate(updateStatus), feedbackController.updateFeedbackStatus)
  .delete('/:id', authenticate, roleAuth(['admin']), feedbackController.deleteFeedback);

module.exports = feedbackRouter;
