const questionsRoute = require('./routes/questions');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();


app.use(express.json()); 
app.use(cors()); 

=
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quizdb';
=
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api', require('./routes/quizzes')); 


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.use('/api', questionsRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



