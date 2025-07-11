import {MongoClient} from 'mongodb';
import {config} from 'dotenv';
config();

const client=new MongoClient(process.env.MONGODB_URI);
let db;

const connectDB=async()=>{
    try {
        await client.connect();
        db=client.db();
        console.log('Database is working')
    } catch (error) {
        console.log('Error is connection to database',error.message);
        
    }
}
export{
    connectDB,db
}