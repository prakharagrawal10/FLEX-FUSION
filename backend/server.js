require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user', userRoutes)

//product routes
const prod_route = require('./routes/productRoute');
app.use('/api/product', prod_route);


// connect to db
mongoose.connect("mongodb://localhost:27017/ECOM");
 
app.listen(3000, function(){
    console.log("Server is ready");
});
