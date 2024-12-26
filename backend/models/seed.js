const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const seed = async () => {
  try {
    // Create Roles if not exist
    const roles = await prisma.role.findMany();
    if (roles.length === 0) {
      const adminRole = await prisma.role.create({
        data: { name: 'Admin' },
      });
      const managerRole = await prisma.role.create({
        data: { name: 'Manager' },
      });
      const userRole = await prisma.role.create({
        data: { name: 'User' },
      });

      // Create Menus for Admin, Manager, and User
      await prisma.menu.createMany({
        data: [
          { title: 'Dashboard', path: '/dashboard', roleId: adminRole.id },
          { title: 'User Management', path: '/user-management', roleId: adminRole.id },
          { title: 'Role Management', path: '/role-management', roleId: adminRole.id },
          { title: 'System Settings', path: '/settings', roleId: adminRole.id },
          { title: 'Reports', path: '/reports', roleId: adminRole.id },
          { title: 'Notifications', path: '/notifications', roleId: adminRole.id },
          { title: 'Help', path: '/help', roleId: adminRole.id },

          { title: 'Dashboard', path: '/dashboard', roleId: managerRole.id },
          { title: 'Team Management', path: '/team-management', roleId: managerRole.id },
          { title: 'Project Overview', path: '/project-overview', roleId: managerRole.id },
          { title: 'Reports', path: '/reports', roleId: managerRole.id },
          { title: 'Notifications', path: '/notifications', roleId: managerRole.id },
          { title: 'Help', path: '/help', roleId: managerRole.id },

          { title: 'Dashboard', path: '/dashboard', roleId: userRole.id },
          { title: 'Profile', path: '/profile', roleId: userRole.id },
          { title: 'My Tasks', path: '/my-tasks', roleId: userRole.id },
          { title: 'Notifications', path: '/notifications', roleId: userRole.id },
          { title: 'Help', path: '/help', roleId: userRole.id },
        ],
      });

      console.log('Roles and Menus seeded successfully!');
    } else {
      console.log('Roles already exist');
    }

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();



