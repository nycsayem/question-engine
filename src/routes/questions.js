const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const { validateQuestion } = require("../middleware/validation");

// Create a new question
router.post("/", validateQuestion, async (req, res) => {
  try {
    const questionData = req.body;
    const question = new Question(questionData);
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Unity-formatted JSON
router.get("/json", async (req, res) => {
  try {
    const questions = await Question.find();
    const unityFormattedQuestions = questions.map((q) => ({
      Question: q.question,
      Solution: q.solution,
      CorrectAnswer: q.correctAnswer,
      Options: q.options,
      Steps: q.steps,
      ImageUrl: q.imageUrl,
      Tags: q.tags,
      Skills: q.skills,
      Difficulty: q.difficulty,
    }));
    res.json(unityFormattedQuestions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get question by ID
router.get("/:id", getQuestion, (req, res) => {
  res.json(res.question);
});

// Update question
router.patch("/:id", getQuestion, validateQuestion, async (req, res) => {
  try {
    const questionData = req.body;
    Object.assign(res.question, questionData);
    await res.question.save();
    res.json(res.question);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete question
router.delete("/:id", getQuestion, async (req, res) => {
  try {
    await res.question.remove();
    res.json({ message: "Question deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get question by ID
async function getQuestion(req, res, next) {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.question = question;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = router;
