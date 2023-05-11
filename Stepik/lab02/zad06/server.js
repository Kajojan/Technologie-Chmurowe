const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const currentDate = new Date();
  res.json({ 
    message: 'Aktualna data i godzina', 
    data: currentDate.toLocaleString() 
  });
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});