export interface AirQualityResultContract {
    Result: {
        pollution: {
            ts: string;
            aqius: number;
            mainus: string;
            aqicn: number;
            maincn: string;
            p1: {
                conc: number;
                aqius: number;
                aqicn: number;
            }
        }
    }
}