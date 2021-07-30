import mongoose from "mongoose";

const DB_CONNECTION_URL = ""; //SYNTAX : 'mongodb://localhost:<port>/<dbname>';

const connectDB = () => {
  console.log("DB trying to connect on " + new Date());
  const options = {
    keepAlive: 1,
    autoReconnect: true,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  // return mongoose.connect(DB_CONNECTION_URL, options) || true;
  return true;
};

export default connectDB;
