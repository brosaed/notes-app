import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://saedmadkaash:Ks7Eh2T6CyKHqJwA@cluster0.jj8iiux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("Error Connecting to DB: error", error);

  }
};