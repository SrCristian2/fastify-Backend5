import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const uri =
  "";

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log("base de datos conectada", db.connection.name);
  } catch (error) {
    console.log(`error al conectar a la base de datos ${error.message}`);
  }
};
