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


app.get('/products', async (req, res) => {
  try {
    const results = await queryDatabase('SELECT * FROM products');
    res.json(results);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Server error');
  }
});

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
