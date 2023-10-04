import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Databases.js';
import Cart from './Cart.js';
import DaftarPesanan from './DaftarPesanan.js';

const Users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  telephone_number: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  profile_picture: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Cart, { foreignKey: 'user_id' });
User.hasMany(DaftarPesanan, { foreignKey: 'user_id' });

export default Users;
