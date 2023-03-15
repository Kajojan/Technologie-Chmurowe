require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const app = express();

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: {
  
  },
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {},
  callendars:{
    type: Array,
  }
},{timestamps: true});
const User = mongoose.model('User', userSchema);
mongoose.set("strictQuery", false);
app.get('/', async (req, res) => {
  const data = await User.find();
  res.json({ 
    data:data
  });
});

mongoose.
  connect('mongodb://Callendar_mongo:27017/test', { useNewUrlParser: true })
   .then(() => {
    app.listen(8080, () => {
      console.log("listening on port", 8080);
    });
  }).catch((error) => {
    console.log(error);
  });
