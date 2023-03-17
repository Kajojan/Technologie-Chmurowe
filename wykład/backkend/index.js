const express = require('express');
const app = express();


const keys = require("./conf")

const redisClient = redis.creareClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: ()=> 1000
})

app.get('/', (req, res) => {
  res.send("hello ")
});

app.listen(8080, () => {
  console.log('Serwer uruchomiony na porcie 8080');
});