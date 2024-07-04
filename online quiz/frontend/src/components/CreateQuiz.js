// Example usage in a component (CreateQuizForm.js)

import React, { useState } from 'react';
import axios from './axiosConfig'; // Import your configured Axios instance

const CreateQuizForm = () => {
  const [quizName, setQuizName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [questionInput, setQuestionInput] = useState('');
  const [optionsInput, setOptionsInput] = useState(['', '', '']);
  const [correctAnswerInput, setCorrectAnswerInput] = useState(0);

  const handleAddQuestion = () => {
    if (questionInput && optionsInput.every(option => option !== '')) {
      setQuestions([
        ...questions,
        {
          question: questionInput,
          options: optionsInput,
          correctAnswer: parseInt(correctAnswerInput),
        },
      ]);
      setQuestionInput('');
      setOptionsInput(['', '', '']);
      setCorrectAnswerInput(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newQuiz = {
        quizName,
        questions,
      };
      const response = await axios.post('/api/questions', newQuiz); // Example POST request
      console.log('Quiz created:', response.data);
      // Optionally, redirect to dashboard or update state to show new quiz
    } catch (err) {
      console.error('Error creating quiz:', err);
    }
  };

  return (
    // Your form JSX and logic
  );
};

export default CreateQuizForm;
