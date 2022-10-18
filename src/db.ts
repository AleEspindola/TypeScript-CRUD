import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/ts-crud", {});
    console.log(">>> Database connected");
    
  } catch (error: any) {
    console.log("ERROR: ", error.message);
  }
}

export default connect;
