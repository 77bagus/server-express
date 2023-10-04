import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Databases.js';
import Cart from './Cart.js';
import DaftarPesanan from './DaftarPesanan.js';

const KelolaPelanggan = sequelize.define('kelola_pelanggan', {
  id_pelanggan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  no_hp: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.TEXT,
  },
});

KelolaPelanggan.hasMany(Cart, { foreignKey: 'user_id' });
KelolaPelanggan.hasMany(DaftarPesanan, { foreignKey: 'user_id' });

export default KelolaPelanggan;
