const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  title: String,
  result: String,
  imageUrl: String
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  steps: [stepSchema],
  imageUrl: String,
  tags: [{
    type: String
  }],
  skills: [{
    type: String
  }],
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);
