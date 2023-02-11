-- CreateTable
CREATE TABLE "Promocode" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "codeType" TEXT NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "maxDiscount" DECIMAL(65,30),
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3),

    CONSTRAINT "Promocode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppliedPromocode" (
    "id" SERIAL NOT NULL,
    "promocodeId" INTEGER NOT NULL,
    "succeeded" BOOLEAN NOT NULL,
    "savings" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "AppliedPromocode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AppliedPromocode_promocodeId_key" ON "AppliedPromocode"("promocodeId");

-- AddForeignKey
ALTER TABLE "AppliedPromocode" ADD CONSTRAINT "AppliedPromocode_promocodeId_fkey" FOREIGN KEY ("promocodeId") REFERENCES "Promocode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
