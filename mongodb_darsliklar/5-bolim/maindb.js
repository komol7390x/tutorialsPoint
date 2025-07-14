import { connect } from 'mongoose';
import { config } from 'dotenv'
config()

const connectDB = async () => {
    try {
        await connect(process.env.MONGODB_URI)
        console.log('server is connect Database')
    } catch (error) {
        console.log('error is coonect server',error.message);
        process.exit(1)
    }
}
console.log(111);

export default connectDB