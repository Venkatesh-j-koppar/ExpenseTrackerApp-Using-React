const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Is Successfull");
  } catch (error) {
    console.log("Error In Connecting the DB");
  }
};

module.exports = { db };
