const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 2 numbers addition endpoint
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1) || 0;
  const num2 = parseFloat(req.query.num2) || 0;
  const result = num1 + num2;
  res.json({ result });
});

// Export the app for testing. Start the server only when this file is run directly.
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;
 
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