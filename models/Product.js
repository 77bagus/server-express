import { DataTypes } from 'sequelize';
import sequelize from '../config/Databases.js';
import Category from './Category.js';
import Cart from './Cart.js';

const Product = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  category_id: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  product_image: {
    type: DataTypes.STRING,
  },
});

const syncProduct = async () => {
  try {
    await Product.sync();
    console.log('Model Product telah disinkronkan dengan tabel.');
  } catch (error) {
    console.error('Kesalahan dalam menyinkronkan model Product:', error);
  }
};

export default { Product, syncProduct };