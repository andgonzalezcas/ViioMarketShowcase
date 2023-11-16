import User from "../models/user"

export const checkDuplicateUsername = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.findOne({ username });
  if (user) return res.status(400).json({ message: 'The user is already on use' });

  next();
}

export const checkDuplicateEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) return res.status(400).json({ message: 'The email is already on use' });

  next();
}