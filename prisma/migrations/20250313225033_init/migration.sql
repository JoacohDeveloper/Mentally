-- CreateTable
CREATE TABLE "User" (
    "Uuid" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
