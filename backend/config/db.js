import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB is connected with ${mongoose.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default ConnectDB;
