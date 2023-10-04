import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Databases.js';
import Product from './Product.js';

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

Category.hasMany(Product, { foreignKey: 'category_id' });

export default Category;
