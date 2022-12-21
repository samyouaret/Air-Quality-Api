import { AirQualityTracker, PrismaClient } from "@prisma/client";

export default class AirQualityTrackerRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(
    latitude: number,
    longitude: number,
    record: AirQualityTrackerRecord
  ): Promise<AirQualityTracker | undefined> {
    return this.prisma.airQualityTracker.create({
      data: {
        longitude,
        latitude,
        ts: record.ts,
        aqius: record.aqius,
        aqicn: record.aqicn,
        mainus: record.mainus,
        maincn: record.maincn,
      },
    });
  }

  async getWorstAirQualityTs(
    latitude: number,
    longitude: number
  ): Promise<{
    aqius: number | null;
    ts: Date;
  }> {
    let result = await this.prisma.airQualityTracker.groupBy({
      by: ["ts"],
      where: {
        latitude: latitude,
        longitude: longitude,
      },
      _max: {
        aqius: true,
      },
    });

    return {
      aqius: result[0]._max.aqius,
      ts: result[0].ts,
    };
  }
}
