import express, { urlencoded, json } from 'express';
import mysql from 'mysql';
import bcrypt from 'bcrypt';

const app = express();
const port = 5000;

app.use(urlencoded({ extended: true }));
app.use(json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lyfetrip'
});


app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required.' });
  }
  pool.query('SELECT * FROM Login WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const user = results[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

  
    res.json({
      message: 'Login successful!',
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        email: user.email
      }
    });
  });
});


app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
