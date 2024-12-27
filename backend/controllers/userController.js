const prisma = require('@prisma/client').PrismaClient;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prismaClient = new prisma();

const register = async (req, res) => {
  const { username, password, email, role } = req.body;  

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("HELLO");
    const checkRoles = await prismaClient.role.findMany();
    console.log("Roles in the database:", checkRoles);

    const roleRecord = await prismaClient.role.findUnique({
      where: { name: role },  
    });

    if (!roleRecord) {
      return res.status(400).json({ error: 'Invalid role' });
    }
    const user = await prismaClient.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        roleId: roleRecord.id
      },
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (e) {
    console.error('Error during registration:', e);
    res.status(500).json({ error: 'Error during registration' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prismaClient.user.findUnique({
      where: { username },
      include: { role: true }, 
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role.name },
      process.env.JWT_SECRET,
      { expiresIn: '12h' }
    );

    res.json({ 
      message: 'Login successful!',
      token,
      user: { id: user.id, username: user.username, role: user.role.name }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
};

module.exports = { register, login };


