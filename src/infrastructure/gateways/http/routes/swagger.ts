import express from 'express'
import swaggerUi from 'swagger-ui-express';
import  yaml from 'js-yaml';
import path from 'path';
import * as fs from 'fs';

export default function swaggerRoute(): express.Router {
    const swaggerSpec = yaml.load(fs.readFileSync(path.join(__dirname.replace('build','src'),'swagger.yaml'), 'utf8'));
    const router = express.Router()
    router.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec as any));

    return router;
}