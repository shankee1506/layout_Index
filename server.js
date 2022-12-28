const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const filterRoutes = require('./routes/filter');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/filter', filterRoutes);

mongoose
  .connect('mongodb+srv://admin12:Admin12@cluster0.lcvw3pm.mongodb.net/menu?retryWrites=true&w=majority', () => {
    console.log("Mongo connected successfully");
  })
  .catch(() => {
    console.log("Connection error");
  });


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
