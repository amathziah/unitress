/*
  Warnings:

  - You are about to drop the column `name` on the `Menu` table. All the data in the column will be lost.
  - You are about to drop the `_MenuToRole` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roleId` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_MenuToRole` DROP FOREIGN KEY `_MenuToRole_A_fkey`;

-- DropForeignKey
ALTER TABLE `_MenuToRole` DROP FOREIGN KEY `_MenuToRole_B_fkey`;

-- AlterTable
ALTER TABLE `Menu` DROP COLUMN `name`,
    ADD COLUMN `roleId` INTEGER NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_MenuToRole`;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
