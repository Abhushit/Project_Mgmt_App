const mongoose = require('mongoose');

const connectDB = async () => {
    // const con = await mongoose.connect(process.env.MONGO_URI);
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        // console.log("MONGODB: Default Connection Established");
        const con = await mongoose.connect(process.env.MONGO_URI2);
        console.log(`Mongo db connected: ${con.connection.host}`.cyan.underline.bold)
      } catch (error) {
        console.log(error);
        process.exit(1);
      }   

    // console.log(`Mongo db connected: ${con.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;