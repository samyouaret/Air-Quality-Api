-- CreateTable
CREATE TABLE "AirQualityTracker" (
    "id" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "ts" TIMESTAMP(3) NOT NULL,
    "aqius" INTEGER NOT NULL,
    "mainus" TEXT NOT NULL,
    "aqicn" INTEGER NOT NULL,
    "maincn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AirQualityTracker_pkey" PRIMARY KEY ("id")
);
