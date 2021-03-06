
require("dotenv").config();


const mongoose = require("mongoose");


const uri = process.env.MONGODB_URI;


const config = { 
    useUnifiedTopology: true, 
    useNewUrlParser: true };

mongoose.connect(uri, config);


mongoose.connection
  .on("open", () => console.log("MONGO CONNECTION IS OPEN"))
  .on("close", () => console.log("MONGO CONNECTION IS CLOSED"))
  .on("error", (error) =>
    console.log("MONGO CONNECTION ERROR \n***************\n", error)
  );

module.exports = mongoose;