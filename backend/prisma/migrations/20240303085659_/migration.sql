-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVerified" BOOLEAN DEFAULT false,
ADD COLUMN     "resetPasswordToken" TEXT,
ADD COLUMN     "verificationToken" TEXT;
