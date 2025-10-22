const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Addition
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1) || 0;
  const num2 = parseFloat(req.query.num2) || 0;
  res.json({ result: num1 + num2 });
});

// Subtraction
app.get('/sub', (req, res) => {
  const num1 = parseFloat(req.query.num1) || 0;
  const num2 = parseFloat(req.query.num2) || 0;
  res.json({ result: num1 - num2 });
});

// Multiplication
app.get('/mult', (req, res) => {
  const num1 = parseFloat(req.query.num1) || 0;
  const num2 = parseFloat(req.query.num2) || 0;
  res.json({ result: num1 * num2 });
});

// Division (returns null when dividing by zero)
app.get('/div', (req, res) => {
  const num1 = parseFloat(req.query.num1) || 0;
  const num2 = parseFloat(req.query.num2) || 0;
  const result = num2 === 0 ? null : num1 / num2;
  res.json({ result });
});

// Only start server when run directly (keeps app testable)
if (require.main === module) {
  app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
}

module.exports = app;
