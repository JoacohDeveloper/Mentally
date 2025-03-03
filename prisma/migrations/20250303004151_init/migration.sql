/*
  Warnings:

  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `Username` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Password" TEXT NOT NULL,
ALTER COLUMN "Username" SET NOT NULL;
