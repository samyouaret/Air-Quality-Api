import { PrismaClient } from '@prisma/client';


export default class AirQualityTrackerRepository {
    constructor(private readonly prisma: PrismaClient) {}
    
    async save(lat: number, lon: number, record:AirQualityTrackerRecord):Promise<any> {
        return this.prisma.airQualityTracker.create({
            data: {
                longitude:lat,
                latitude: lon,
                ts: record.ts,
                aqius: record.aqius,
                aqicn: record.aqicn,
                mainus: record.mainus,
                maincn: record.maincn,
            },
        });
    }

    getWorstAirQuality(lat: number, lon: number, ts: string): any {
      return this.prisma.airQualityTracker.aggregate({
            where: {
                latitude: lat,
                longitude: lon,
                ts: ts,
            },
            _max: {
                aqius: true,
            },
        });
    }
}
