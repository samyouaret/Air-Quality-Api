import express from 'express'
import { NextFunction, Request, Response } from "express";

export default function indexRoute(): express.Router {
    let router: express.Router = express.Router();
    router.get("api/*", (req: Request, res: Response, next: NextFunction) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ message: "Air quality API" }));
    });

    return router;
}