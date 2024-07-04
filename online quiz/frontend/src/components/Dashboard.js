// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';

const Dashboard = ({ axios }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('/api/quizzes');
        setQuizzes(response.data);
      } catch (err) {
        console.error('Fetch Quizzes Error:', err);
      }
    };

    fetchQuizzes();
  }, [axios]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Dashboard</h2>
        <div className="space-y-4">
          {quizzes.map(quiz => (
            <div key={quiz._id} className="p-4 bg-gray-200 rounded-lg">
              <Link to={`/quiz/${quiz._id}`} className="text-lg font-medium text-gray-900 hover:text-indigo-600">
                {quiz.quizName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
