const express = require('express');
const router = express.Router();
const { authenticate, authorizeRole } = require('../middleware/authMiddleware');
const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

router.get('/users', authenticate, authorizeRole(['Admin']), async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        role: true, 
      },
    });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

module.exports = router;
