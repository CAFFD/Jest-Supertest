  const express = require('express');
   const app = express();
   const port = 3000;

   // 2 numbers addition endpoint
   app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = num1 + num2;
    res.send(`Result: ${result}`);
   });

   // Another endpoint can be added here
   // subtraction, multiplication, etc.



   
  // Server listening
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });