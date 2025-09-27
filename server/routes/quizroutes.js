const express = require("express");
const router = express.Router();
const Question = require("../models/question");

// GET all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new question
router.post("/", async (req, res) => {
  try {
    const { questionText, options, correctAnswer } = req.body;

    const newQuestion = new Question({
      questionText,
      options,
      correctAnswer,
    });

    await newQuestion.save();
    res.json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
