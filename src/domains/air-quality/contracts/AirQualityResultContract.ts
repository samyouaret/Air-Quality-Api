export interface AirQualityResultContract {
    Result: {
        pollution: {
            ts: string;
            aqius: number;
            mainus: string;
            aqicn: number;
            maincn: string;
        }
    }
}