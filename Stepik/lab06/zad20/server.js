const express = require('express');
const mongodb = require('mongodb');

require('dotenv').config();

const app = express();

app.get('/users', async (req, res) => {
  const client = await mongodb.MongoClient.connect('mongodb://db:27017', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db();
  const users = await db.collection('users').find().toArray();
  res.json(users);
  
});

app.listen(3003, () => {
  console.log(`Server listening at http://localhost:3003`);
});
