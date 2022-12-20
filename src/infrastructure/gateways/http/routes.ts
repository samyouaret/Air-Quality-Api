import indexRoute from './routes/index';
import error404 from './routes/404';
import error500 from './routes/500';
import AirQualityRoutes from '../../../domains/air-quality/routes';
import swaggerRoute from './routes/swagger';

// loaders will be called in the defined order
const routes = [AirQualityRoutes,indexRoute,swaggerRoute, error404, error500];

export default routes;
