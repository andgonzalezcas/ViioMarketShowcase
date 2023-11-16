import User from "../models/user";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting users (" + error + ")" });
  }
};

export const getUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  return res.json(user);
};