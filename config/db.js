//Database setup --->

const mongoose = require("mongoose");
require("colors");

const connectDB = mongoose
  .connect("mongodb://localhost:27017/Expense-Tracker", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection at local server successful".green.bold);
  })
  .catch((err) => {
    console.log(err);
    console.log("Database connection error".red.bold);
  });

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
//   } catch (err) {
//     console.log(`Error: ${err.message}`.red);
//     process.exit(1);
//   }
// }

module.exports = connectDB;
