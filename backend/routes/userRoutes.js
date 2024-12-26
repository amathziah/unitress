const express = require('express');
const router = express.Router();
const { authenticate, authorizeRole } = require('../middleware/authMiddleware');
const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();


router.get('/users', authenticate, authorizeRole(['Admin']), async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

module.exports = router;
