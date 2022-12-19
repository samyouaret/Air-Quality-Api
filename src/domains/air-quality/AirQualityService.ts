import { AirQualityResultContract } from "./contracts/AirQualityResultContract";
import { AirQualityServiceContract } from "./contracts/AirQualityServiceContract";

export class AirQualityService implements AirQualityServiceContract {
  async getByNearestCity(longitude:number, latitude:number):Promise<AirQualityResultContract> {
    return { 
      Result: {
      pollution: {
        ts: "2017-02-01T01:15:00.000Z",
        aqius: 18,
        mainus: "p1", //main pollutant for US AQI
        aqicn: 20,
        maincn: "p1",  //main pollutant for Chinese AQI
        p1: {   //pollutant details, concentration and appropriate AQIs
          conc: 20,
          aqius: 18,
          aqicn: 20
        }
      }
    }
  };
  
  }
}

export default AirQualityService;
