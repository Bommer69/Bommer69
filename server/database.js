const express = require('express');
const mysql = require('mysql2');
const app = express();

// Sử dụng connection string để kết nối MySQL
const connectionString = 'mysql://Vinh:@DESKTOP-NIVNV3H:3306/QuanlyWeb';
const db = mysql.createConnection(connectionString);

// Kết nối đến MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Đã kết nối đến MySQL');
});

// API để lấy dữ liệu từ bảng example_table
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM example_table', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Khởi chạy server tại cổng 3000
app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
