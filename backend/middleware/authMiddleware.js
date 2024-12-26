const jwt = require('jsonwebtoken');
const prisma = require('../models/menu');

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

const authorizeRole = (roles) => {
    console.log(roles)
  return async (req, res, next) => {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    console.log(user)
    // if (!roles.includes(user.username)) {
    //   return res.status(403).json({ message: 'Forbidden' });
    // }
    next();
  };
};

module.exports = { authenticate, authorizeRole };
