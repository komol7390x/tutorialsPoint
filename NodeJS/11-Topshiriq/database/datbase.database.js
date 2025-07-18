import mongoose from 'mongoose';
import {configEnv} from '../config/config.js'
const {mongoURI}=configEnv
const connectDB = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;
connectDB.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(connectDB.db, { bucketName: 'uploads' });
});

export { connectDB, gfs, mongoURI };
