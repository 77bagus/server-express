import { CheckOutService } from '../services/index.js';

export const createCheckOut = async (req, res) => {
  try {
    const checkOut = await CheckOutService.createCheckOut(req.body);
    console.log('CheckOut created for user:', checkOut.User_ID);
    res.status(201).json(checkOut);
  } catch (error) {
    console.error('Error creating CheckOut:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getAllCheckOutsByUser = async (req, res) => {
  const { User_ID } = req.params;
  try {
    const checkOuts = await CheckOutService.getAllCheckOutsByUser(User_ID);
    console.log('Retrieved CheckOuts for user:', User_ID);
    res.json(checkOuts);
  } catch (error) {
    console.error('Error retrieving CheckOuts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateCheckOut = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCheckOut = await CheckOutService.updateCheckOut(id, req.body);
    if (!updatedCheckOut) {
      console.error('CheckOut not found:', id);
      return res.status(404).json({ message: 'CheckOut not found' });
    }
    console.log('CheckOut updated for user:', updatedCheckOut.User_ID);
    res.json({ message: 'CheckOut updated', checkOut: updatedCheckOut });
  } catch (error) {
    console.error('Error updating CheckOut:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteCheckOut = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await CheckOutService.deleteCheckOut(id);
    if (deleted) {
      console.log('CheckOut deleted:', id);
      return res.json({ message: 'CheckOut deleted' });
    }
    console.error('CheckOut not found:', id);
    return res.status(404).json({ message: 'CheckOut not found' });
  } catch (error) {
    console.error('Error deleting CheckOut:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
