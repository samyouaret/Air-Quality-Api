import { IqairApiFactory } from "../../../../infrastructure/airq-api/IqairApiFactory";
import { createPrisma } from "../../../../infrastructure/databases/createPrisma";
import AirQualityTrackerRepository from "../../AirQualityTrackerRepository";
import AirQualityTrackerService from "../../AirQualityTrackerService";

const prisma = createPrisma();
const iqairApiFactory = new IqairApiFactory();
const api = iqairApiFactory.create();
const repository = new AirQualityTrackerRepository(prisma)
const service = new AirQualityTrackerService(api,repository)

beforeAll(async () => {
    await prisma.$connect();
});

afterEach(async() => {
    await prisma.airQualityTracker.deleteMany();
});

afterAll(async () => {
    await prisma.$disconnect();
});

test('Integration: Should save tracking record in db', async() => {
    const result = await service.track(48.856613, 2.352222);
    expect(result).toBeDefined();
    const newRecord = await prisma.airQualityTracker.findFirst({
        where: {
            latitude: 48.856613,
            longitude: 2.352222
        }
    });
    expect(newRecord).toBeDefined();
    expect(newRecord?.latitude).toBe(48.856613);
    expect(newRecord?.longitude).toBe(2.352222);
});