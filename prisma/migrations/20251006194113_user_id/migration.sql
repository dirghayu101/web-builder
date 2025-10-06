/*
  Warnings:

  - Added the required column `userId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "web_builder_schema"."Project" ADD COLUMN     "userId" TEXT NOT NULL;
