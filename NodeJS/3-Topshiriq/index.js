import mongoose from "mongoose";
import { version } from "react";

mongoose.connect('mongodb://localhost/test')
    .then(() => {
        console.log('MongoDBga ulanish hosil qilindi...');
    })
    .catch((err) => {
        console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
    });

const SizeSchema = new mongoose.Schema({
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    uom: { type: String, required: true }
})

const inventorySchema = new mongoose.Schema({
    item: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    size: SizeSchema,
    status: { type: String, required: true }
}, { timestamps: true, versionKey: false });

const Inventory = mongoose.model('Inventory', inventorySchema);

async function getInventoryItems1() {
    return await Inventory
        .find({ status: 'A' })
        .sort({ item: 1 })
        .select({ item: 1, quantity: 1, _id: 0 })
}

async function getInventoryItems2() {
    return await Inventory
        .find()
        .or([{ quantity: { $lte: 50 } }, { item: /.*l.*/i }])
        .sort({ quantity: -1 })
}

async function run() {
    const items1 = await getInventoryItems2();
    const items2 = await getInventoryItems1();
    console.log(items1);
    console.log(items2);
}

run();

