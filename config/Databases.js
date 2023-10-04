import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { MYSQL_URL } = process.env;

const sequelize = new Sequelize(MYSQL_URL, {
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

export default sequelize;
