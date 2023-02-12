/*
  Warnings:

  - Added the required column `status` to the `Promocode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Promocode" ADD COLUMN     "status" TEXT NOT NULL;
