const Joi = require('joi');

const questionSchema = Joi.object({
  question: Joi.string().required(),
  solution: Joi.string().required(),
  correctAnswer: Joi.string().required(),
  options: Joi.array().items(Joi.string()).min(2).required(),
  steps: Joi.array().items(Joi.object({
    title: Joi.string().required(),
    result: Joi.string().required(),
    imageUrl: Joi.string().uri().allow('')
  })),
  imageUrl: Joi.string().uri().allow(''),
  tags: Joi.array().items(Joi.string()),
  skills: Joi.array().items(Joi.string()),
  difficulty: Joi.string().valid('easy', 'medium', 'hard').default('medium')
});

function validateQuestion(req, res, next) {
  const { error } = questionSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
}

module.exports = { validateQuestion };
