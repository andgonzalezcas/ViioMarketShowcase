import User from "../models/user";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting users (" + error + ")" });
  }
};

export const getUserByToken = async (req, res) => {
  try {
    res.json({ response: req.userData });
  } catch (error) {
    res.status(500).json({ message: "Error getting user (" + error + ")" });
  }
};