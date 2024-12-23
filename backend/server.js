const express = require('express');
const cors = require('cors');
const route = require('./routes/route');
const mongoose = require('mongoose');
const app = express()
const mongoURI =
  "mongodb+srv://shiva:shiva1234@cluster0.tqx2i.mongodb.net/employeedetails"

const connectDB = async () => {
  try {      
    await mongoose.connect(mongoURI);
    console.log('Connected to mongoDB');
  } catch (e) {
    console.error('Error connecting to MongoDB:', e.message);
    process.exit(1);
  }
};
connectDB();
app.use(cors());
app.use(express.json())
app.use(route)

const port = 4000
app.listen(port, (error) => {
  if (error) {
    console.log("error")
  } else {
    console.log(`server runningon ${port}`)
  }
})