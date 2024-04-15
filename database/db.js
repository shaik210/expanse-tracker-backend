import mongoose from "mongoose";

const Connection = async () => {
  const URL ="mongodb+srv://user:1234@cluster1.ipbzior.mongodb.net/?retryWrites=true&w=majority"
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected succesfully!");
  } catch (error) {
    console.log("Error while connecting with database ", error);
  }
};

export default Connection;
