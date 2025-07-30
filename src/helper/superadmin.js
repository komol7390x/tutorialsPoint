import { disconnect } from 'mongoose'

import { configFile } from '../config/env.config.js'
import crypt from '../utils/hash.js'
import { connectDB } from '../database/database.js'
import { User } from '../models/user.model.js'
import { Role } from '../const/Role.js'
(async function () {
    try {
        await connectDB();
        const role = await User.findOne({ role: Role.SUPERADMIN })
        if (role) {
            console.log('This SUPERADMIN already added')
            process.exit(1)
        }
        const password = await crypt.encrypt(configFile.SUPERADMIN.PASSWORD)
        await User.create({
            name: configFile.SUPERADMIN.USERNAME,
            email: configFile.SUPERADMIN.EMAIL,
            password,
            role: Role.SUPERADMIN
        })
        console.log('Super admin created :)');
        await disconnect()
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}())