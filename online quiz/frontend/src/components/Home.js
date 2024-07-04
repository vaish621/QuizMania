// Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">Quizmania</h1>
        <p className="mt-6 text-xl text-gray-700">Welcome to Quizmania! Choose an option below:</p>
        <div className="mt-8 space-y-4">
          <Link
            to="/login"
            className="w-full inline-block py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Admin Login
          </Link>
          <Link
            to="/dashboard"
            className="w-full inline-block py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Take Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
