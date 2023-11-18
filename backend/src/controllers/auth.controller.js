import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';

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
      { id: savedUser.id },
      config.SECRET,
      { expiresIn: 600 } // 10 minutos
    )

    res.json({ response: token, success: true });
  } catch (error) {
    res.json({ response: "Error creating user (" + error + ")", success: false });
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.json({ response: "User not found", success: false });

    const matchPassword = await User.comparePassword(password, userFound.password);

    if (!matchPassword)
      return res.json({ response: "Invalid Password", success: false });

    const token = jwt.sign(
      { id: userFound._id },
      config.SECRET,
      { expiresIn: 600 } // 10 minutos
    );

    res.json({ response: token, success: true });
  } catch (error) {
    res.json({ response: "Error signin user (" + error + ")", success: false });
  }
}