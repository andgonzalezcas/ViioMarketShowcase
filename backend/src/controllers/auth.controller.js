import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config'

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
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
        expiresIn: 86400 // expira en 120 segundos - 24 horas
      }
    )

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error creating user (" + error + ")" });
  }
}

export const signin = async (req, res) => {
  const { username, email, password } = req.body;

  res.json({ username, email, password });
}