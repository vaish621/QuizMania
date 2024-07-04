import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/questions`);
        setQuizzes(response.data);
      } catch (err) {
        console.error('Failed to fetch quizzes:', err);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Dashboard</h2>
        <div className="space-y-4">
          {quizzes.length > 0 ? (
            quizzes.map((quiz, index) => (
              <Link
                key={index}
                to={`/quiz/${quiz._id}`}
                className="block p-4 bg-white rounded-lg shadow-md transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-lg font-medium text-gray-900">{quiz.quizName}</h3>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-700">No quizzes available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
