const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/streamweb?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;