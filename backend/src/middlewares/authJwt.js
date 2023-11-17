import jwt from 'jsonwebtoken';
import config from '../config'
import User from '../models/user';

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];

    if (!token) return res.status(403).json({ response: 'No token provided' });
    const decoded = jwt.verify(token, config.SECRET); // informacion del usuario decodificada

    const user = await User.findById(decoded.id, { password: 0 }); // pasword: 0 es para que no retorne el password
    if (!user) return res.status(404).json({ response: 'no user token found' });

    req.userData = user;
  } catch (error) {
    return res.status(500).json({ response: 'unauthorized' });
  }

  next();
}