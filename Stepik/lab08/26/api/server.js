import express from "express";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error: " + err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!\n");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});