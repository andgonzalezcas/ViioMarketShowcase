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
      { expiresIn: 86400 } // 24 horas
    )

    res.json({ response: token });
  } catch (error) {
    res.status(500).json({ response: "Error creating user (" + error + ")" });
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ response: "User not found" });

    const matchPassword = await User.comparePassword(password, userFound.password);

    if (!matchPassword)
      return res.status(401).json({
        response: "Invalid Password",
      });

    const token = jwt.sign(
      { id: userFound._id },
      config.SECRET,
      { expiresIn: 86400 } // 24 horas
    );

    res.json({ response: token });
  } catch (error) {
    res.status(500).json({ response: "Error signin user (" + error + ")" });
  }
}