const mongoose = require('mongoose');

const mongoURI = 'mongodb://root:MTQxMDktYW5uYW1h@localhost:27017/your-database-name';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
