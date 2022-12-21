import { AirQualityTracker, PrismaClient } from '@prisma/client';


export default class AirQualityTrackerRepository {
    constructor(private readonly prisma: PrismaClient) {}
    
    async save(latitude: number, longitude: number, record: AirQualityTrackerRecord):Promise<AirQualityTracker | undefined> {
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

    getWorstAirQuality(latitude: number, longitude: number, ts: string): any {
      return this.prisma.airQualityTracker.aggregate({
            where: {
                latitude: latitude,
                longitude: longitude,
                ts: new Date(ts),
            },
            _max: {
                aqius: true,
            },
        });
    }
}
