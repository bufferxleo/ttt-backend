import mongoose from "mongoose";
import {} from "dotenv/config";

const connetDB = async () => {
  try {
    const con = await mongoose.connect(`${process.env.DB_URL}`);
    if (con) {
      console.log("db connection sucess");
    }else{
      console.log("db connection failed")
    }
  } catch (err) {
    console.log("internal error while connect to db", err);
  }
};

export default connetDB;
