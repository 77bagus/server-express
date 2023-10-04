import { User } from '../models';

export const createUser = async (userData) => {
  const newUser = await User.create(userData);
  console.log('User created:', newUser.Username);
  return newUser;
};

export const getUserById = async (id) => {
  const user = await User.findByPk(id);
  console.log('Retrieved user by ID:', id);
  return user;
};

export const updateUser = async (id, userData) => {
  const [updatedRowsCount] = await User.update(userData, { where: { Username: id } });
  if (updatedRowsCount === 0) {
    console.log('User not found for updating:', id);
    return null;
  }
  console.log('User updated:', id);
  return getUserById(id);
};

export const deleteUser = async (id) => {
  const deletedRowCount = await User.destroy({ where: { Username: id } });
  if (deletedRowCount === 0) {
    console.log('User not found for deletion:', id);
    return false;
  }
  console.log('User deleted:', id);
  return true;
};
