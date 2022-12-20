import { AirQualityApiAbstractFactory } from "./contracts/AirQualityApiAbstractFactory";
import { AirQualityApiContract } from "./contracts/AirQualityApiContract";
import { IqairApi } from "./IqairApi";

export class IqairApiFactory implements AirQualityApiAbstractFactory {
    create(): AirQualityApiContract {
        let url  = process.env.IQAIR_API_URL as string;
        let apiKey = process.env.API_KEY as string;
        return new IqairApi(apiKey, url);
    }
}