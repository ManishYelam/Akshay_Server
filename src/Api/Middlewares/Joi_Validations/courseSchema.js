const Joi = require('joi');

const courseCreateSchema = Joi.object({
  title: Joi.string().min(5).max(255).required(),
  description: Joi.string().required(),
  short_description: Joi.string().max(500).optional(),
  duration: Joi.string().required(),
  fee: Joi.number().min(0).required(),
  original_fee: Joi.number().min(0).optional(),
  mode: Joi.string().valid('online_live', 'online_self_paced', 'hybrid').required(),
  level: Joi.string().valid('beginner', 'intermediate', 'advanced').required(),
  featured: Joi.boolean().optional(),
  seats_available: Joi.number().integer().min(0).optional(),
  metadata: Joi.object().optional(),
});

const courseUpdateSchema = Joi.object({
  title: Joi.string().min(5).max(255).optional(),
  description: Joi.string().optional(),
  short_description: Joi.string().max(500).optional(),
  duration: Joi.string().optional(),
  fee: Joi.number().min(0).optional(),
  original_fee: Joi.number().min(0).optional(),
  mode: Joi.string().valid('online_live', 'online_self_paced', 'hybrid').optional(),
  level: Joi.string().valid('beginner', 'intermediate', 'advanced').optional(),
  featured: Joi.boolean().optional(),
  seats_available: Joi.number().integer().min(0).optional(),
  is_active: Joi.boolean().optional(),
  metadata: Joi.object().optional(),
});

module.exports = { courseCreateSchema, courseUpdateSchema };
