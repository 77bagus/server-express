import { DataTypes } from 'sequelize';
import { sequelize } from '../config/Databases.js';
import Users from './Users.js';
import PaymentMethod from './PaymentMethod.js';

const CheckOut = sequelize.define('check_out', {
  no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  shipping_address: {
    type: DataTypes.TEXT,
  },
  ordered_products: {
    type: DataTypes.STRING,
  },
  payment_method_id: {
    type: DataTypes.INTEGER,
  },
});

CheckOut.belongsTo(Users, { foreignKey: 'user_id' });
CheckOut.belongsTo(PaymentMethod, { foreignKey: 'payment_method_id' });

export default CheckOut;
