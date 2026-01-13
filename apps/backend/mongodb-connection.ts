import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    const conn = await mongoose.connect(process.env.DATABASE_URI || '');
    return conn;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
