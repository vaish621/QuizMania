// CreateQuizForm.js

import React, { useState } from 'react';
import axios from '../axiosConfig';

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Create Quiz</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="quizName" className="sr-only">Quiz Name</label>
            <input
              id="quizName"
              name="quizName"
              type="text"
              value={quizName}
              onChange={(e) => setQuizName(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Quiz Name"
            />
          </div>
          <div>
            <label htmlFor="question" className="sr-only">Question</label>
            <input
              id="question"
              name="question"
              type="text"
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Question"
            />
          </div>
          {/* Options input (similar to above) */}
          {/* Correct answer input (similar to above) */}
          <div>
            <button
              type="button"
              onClick={handleAddQuestion}
              className="inline-block py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Question
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full inline-block py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuizForm;
