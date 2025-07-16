import mongoose from 'mongoose';
import currency from 'currency.js';
import initDatabase from './init.js';
import User from './models/user.js';
import Product from './models/product.js';
import Order from './models/order.js';

async function purchaseProduct(userAccountNumber, productSKU, quantity) {
    // Ma'lumotlar omborini ishga tushuramiz
    await initDatabase();

    // Sessiyani yaratamiz
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Foydalanuvchini topamiz
        let user = await User.findOne({ accountNumber: userAccountNumber }).session(session);
        if (!user) throw new Error('User not found');

        // Mahsulotni topamiz
        let product = await Product.findOne({ sku: productSKU }).session(session);
        if (!product) throw new Error('Product not found');

        // Mahsulot narxini hisoblaymiz
        let totalPrice = currency(product.price).multiply(quantity);

        // Pul yetarli ekanini tekshiramiz
        if (currency(user.balance).subtract(totalPrice).value < 0) {
            throw new Error(`User ${user.name} has insufficient balance`);
        }

        // Mahsulot zaxirasini kamaytiramiz
        if (product.stock < quantity) {
            throw new Error('Not enough stock');
        }
        product.stock -= quantity;
        await product.save({ session });

        // Foydalanuvchi balansidan pul yechib tashlaymiz
        user.balance = currency(user.balance).subtract(totalPrice).value;
        await user.save({ session });

        // Buyurtmani yaratamiz
        let order = new Order({
            user: user._id,
            product: product._id,
            quantity,
            totalAmount: totalPrice.value,
            status: 'Created'
        });
        await order.save({ session });

        // Transaksiyani commit qilamiz
        await session.commitTransaction();
        console.log('✅ Purchase completed successfully!');
    } catch (error) {
        // Xato bo‘lsa bekor qilamiz
        await session.abortTransaction();
        console.error('❌ Transaction aborted:', error);
        throw error;
    } finally {
        // Sessiyani yopamiz
        session.endSession();
    }
}

export { purchaseProduct };
