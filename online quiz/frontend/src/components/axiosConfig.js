// Assuming you have a separate file for Axios configuration (axiosConfig.js)

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://quizmania-back.onrender.com/', // Replace with your actual deployed backend URL
});

export default instance;
