import { DataTypes } from 'sequelize';
import sequelize from '../config/Databases.js';

const Category = sequelize.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
  },
});

const syncCategory = async () => {
  try {
    await Category.sync();
    console.log('Model Category telah disinkronkan dengan tabel.');
  } catch (error) {
    console.error('Kesalahan dalam menyinkronkan model Category:', error);
  }
};

export default { Category, syncCategory };