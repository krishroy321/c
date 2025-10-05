const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Example login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Check MongoDB for user (pseudo-code)
  // If valid: res.json({ success: true, user: { ... } });
  // Else: res.status(401).json({ success: false, message: 'Invalid credentials' });
  res.status(501).json({ success: false, message: 'Not implemented. Use Firebase Auth on frontend.' });
});

// Example register endpoint
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  // Save user to MongoDB (pseudo-code)
  res.status(501).json({ success: false, message: 'Not implemented. Use Firebase Auth on frontend.' });
});

app.listen(3000, () => console.log('Server running on port 3000'));