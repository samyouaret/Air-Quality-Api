import { AirQualityApiAbstractFactory } from "./AirQualityApiAbstractFactory";
import { AirQualityApiContract } from "./AirQualityApiContract";
import { IqairApi } from "./IqairApi";

export class IqairApiFactory implements AirQualityApiAbstractFactory {
  create(): AirQualityApiContract {
    let url = process.env.IQAIR_API_URL as string;
    let apiKey = process.env.API_KEY as string;
    return new IqairApi(apiKey, url);
  }
}
