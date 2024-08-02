const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
  const { name, email, rollNumber, numbers, alphabets } = req.body;
  const userId = `${name}_${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()}`;
  const isSuccess = true;

  res.json({
    status: 'success',
    user_id: userId,
    college_email_id: email,
    college_roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    is_success: isSuccess
  });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
