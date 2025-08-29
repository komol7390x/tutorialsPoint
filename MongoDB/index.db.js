const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "testdb";

let collection;

async function connectDb() {
  await client.connect();
  console.log("✅ MongoDBga ulandik!");
  const db = client.db(dbName);
  collection = db.collection("users");
}
connectDb();

// CREATE
app.post("/users", async (req, res) => {
  const result = await collection.insertOne(req.body);
  res.send(result);
});

// READ (hammasi)
app.get("/users", async (req, res) => {
  const users = await collection.find().toArray();
  res.send(users);
});

// READ (bitta)
app.get("/users/:id", async (req, res) => {
  const user = await collection.findOne({ _id: new ObjectId(req.params.id) });
  res.send(user);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  const result = await collection.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.send(result);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
  res.send(result);
});

app.listen(3000, () => {
  console.log("✅ API server http://localhost:3000 da ishlayapti");
});
