import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);


app.listen(5002, () => {
  console.log("Server is running on PORT: 5002");
});

//