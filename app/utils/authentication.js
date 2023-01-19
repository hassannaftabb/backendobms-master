const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
require('dotenv').config();

const generateAccessToken = async (_payload) => {
  const payload = { id: _payload.id };
  return jwt.sign({ payload }, process.env.JWT_SECRET, { expiresIn: 5184000 });
};

const verifyAuthToken = () => {
  return (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).send({ message: 'Token not found' });
    } else {
      const tokenBody = token.slice(7);
      jwt.verify(tokenBody, process.env.JWT_SECRET, (error) => {
        if (error) {
          return res
            .status(401)
            .send({ message: 'Access denied, expire token' });
        }
        next();
      });
    }
  };
};

const getUserIdFromToken = async (req) => {
  try {
    const token = req.header('authorization');
    const tokenBody = token.slice(7);
    const decoded = jwt_decode(tokenBody);
    let u_id = decoded.payload.id;
    return u_id;
  } catch (error) {
    return false;
  }
};

module.exports = { generateAccessToken, verifyAuthToken, getUserIdFromToken };
