import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config'

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password)
  });

  const savedUser = await newUser.save();

  const token = jwt.sign(
    {
      id: savedUser.id
    },
    config.SECRET,
    {
      expiresIn: 120 // expira en 120 segundos
    }
  )

  res.json({ token });
}

export const signin = async (req, res) => {
  const { username, email, password } = req.body;

  res.json({ username, email, password });
}