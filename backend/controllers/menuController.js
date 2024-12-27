const prisma = require('@prisma/client').PrismaClient;
const prismaClient = new prisma();

const getMenu = async (req, res) => {
  const { role } = req.user;
  console.log(role)

  try {
    if (!role) {
      return res.status(400).json({ error: 'Role is required' });
    }
    const roleRecord = await prismaClient.role.findUnique({
      where: { name: role },
      include: { menus: true },
    });

    if (!roleRecord) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.json({ menus: roleRecord.menus });
  } catch (error) {
    console.error('Error during fetching menus:', error);
    res.status(500).json({ error: 'Error during fetching menus' });
  }
};

module.exports = { getMenu };

