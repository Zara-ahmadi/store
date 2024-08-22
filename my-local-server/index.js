const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'store'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

const queryDatabase = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, results) => {
      if (err) {
        console.error('Query error:', err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


app.post('/product', async (req, res) => {
  const { id } = req.body;
  console.log(`Fetching product with ID: ${id}`);
  try {
    const results = await queryDatabase('SELECT * FROM products WHERE id = ?', [id]);
    if (results.length > 0) {
      console.log('Product found:', results[0]);
      res.json(results[0]);
    } else {
      console.log('Product not found'); 
      res.status(404).send('Product not found');
    }
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).send('Server error');
  }
});

app.get('/comments', async (req, res) => {
  try {
    const results = await queryDatabase('SELECT * FROM comments');
    res.json(results);
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).send('Server error');
  }
});

app.get('/products', async (req, res) => {
  try {
    const results = await queryDatabase('SELECT * FROM products');
    res.json(results);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Server error');
  }
});

app.post('/comments', async (req, res) => {
  const { rating, text } = req.body;

  try {
    const result = await queryDatabase('INSERT INTO comments (rating, text, date) VALUES (?, ?, NOW())', [rating, text]);
    const newComment = await queryDatabase('SELECT * FROM comments WHERE id = ?', [result.insertId]);

    res.status(201).json(newComment[0]);
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).send('Server error');
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
