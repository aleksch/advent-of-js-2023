/*
  Warnings:

  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `Pairings` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `UserStatus` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('INVITED', 'DECLINED', 'ACCEPTED');

-- DropForeignKey
ALTER TABLE "Pairings" DROP CONSTRAINT "Pairings_eventId_fkey";

-- DropForeignKey
ALTER TABLE "ThankYou" DROP CONSTRAINT "ThankYou_eventId_fkey";

-- DropForeignKey
ALTER TABLE "UserStatus" DROP CONSTRAINT "UserStatus_eventId_fkey";

-- DropForeignKey
ALTER TABLE "WishList" DROP CONSTRAINT "WishList_eventId_fkey";

-- DropIndex
DROP INDEX "Pairings_personId_key";

-- DropIndex
DROP INDEX "Pairings_santaId_key";

-- DropIndex
DROP INDEX "ThankYou_toUserId_key";

-- DropIndex
DROP INDEX "ThankYou_userId_key";

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Event_id_seq";

-- AlterTable
ALTER TABLE "Pairings" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "eventId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ThankYou" ALTER COLUMN "eventId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "avatar" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "UserStatus" ALTER COLUMN "eventId" SET DATA TYPE TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL;

-- AlterTable
ALTER TABLE "WishList" ADD COLUMN     "siteImage" TEXT,
ALTER COLUMN "updatedAt" DROP DEFAULT,
ALTER COLUMN "eventId" SET DATA TYPE TEXT,
ALTER COLUMN "siteTitle" DROP NOT NULL,
ALTER COLUMN "siteDescription" DROP NOT NULL;

-- DropEnum
DROP TYPE "UserInviteStatus";

-- AddForeignKey
ALTER TABLE "UserStatus" ADD CONSTRAINT "UserStatus_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pairings" ADD CONSTRAINT "Pairings_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThankYou" ADD CONSTRAINT "ThankYou_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
