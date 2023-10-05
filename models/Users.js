import { DataTypes } from 'sequelize';
import sequelize from '../config/Databases.js';

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

const syncUsers = async () => {
  try {
    await Users.sync();
    console.log('Model Users telah disinkronkan dengan tabel.');
  } catch (error) {
    console.error('Kesalahan dalam menyinkronkan model Users:', error);
  }
};

export default { Users, syncUsers };
