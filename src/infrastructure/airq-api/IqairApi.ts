import { AirQualityApiContract } from "./AirQualityApiContract";
import { AirQualityResultContract } from "./AirQualityResultContract";
const axios = require('axios').default;

export class IqairApi implements AirQualityApiContract{
    constructor(private apiKey: string, private url: string) {}
    
    async getNearestCity(latitude: number, longitude: number): Promise<AirQualityResultContract> {
        let url = this.url  + `/nearest_city?lat=${latitude}&lon=${longitude}&key=${this.apiKey}`
        const response = await axios.get(url);
        const body = response.data;
        const pollution = body.data.current.pollution;
        return {
            Result: {
                pollution       
        }
    }
}
}