import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost/files';

const connectDB = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;
connectDB.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(connectDB.db, { bucketName: 'uploads' });
});

export { connectDB, gfs, mongoURI };
