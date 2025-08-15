import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default User;
