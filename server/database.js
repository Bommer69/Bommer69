const express = require('express');
const app = express();

// Xóa cấu hình kết nối MySQL và các API liên quan

// Khởi chạy server tại cổng 3000
app.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000');
});
