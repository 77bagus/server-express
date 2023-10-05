import { CheckOut } from '../models/index.js';

export const createCheckOut = async (checkOutData) => {
  const checkOut = await CheckOut.create(checkOutData);
  console.log('CheckOut created for user:', checkOut.User_ID);
  return checkOut;
};

export const getAllCheckOutsByUser = async (User_ID) => {
  const checkOuts = await CheckOut.findAll({ where: { User_ID: User_ID } });
  console.log('Retrieved CheckOuts for user:', User_ID);
  return checkOuts;
};

export const updateCheckOut = async (id, checkOutData) => {
  const [updated] = await CheckOut.update(checkOutData, { where: { No: id } });
  if (updated) {
    const updatedCheckOut = await CheckOut.findOne({ where: { No: id } });
    console.log('CheckOut updated for user:', updatedCheckOut.User_ID);
    return updatedCheckOut;
  }
  return null;
};

export const deleteCheckOut = async (id) => {
  const deleted = await CheckOut.destroy({ where: { No: id } });
  if (deleted) {
    console.log('CheckOut deleted:', id);
    return true;
  }
  return false;
};
