const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const questionsRouter = require('./routes/questions');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/questions', questionsRouter);

// MongoDB connection with retries and graceful shutdown
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    setTimeout(connectMongoDB, 5000); // Retry after 5 seconds if failed
  }
};

connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown on process termination
process.on('SIGINT', async () => {
  console.log('Shutting down server...');
  await mongoose.disconnect();
  process.exit(0);
});
