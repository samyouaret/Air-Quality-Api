import express from "express";
import Application from "../../../../core/Application";

export default function error404(app: Application): express.Handler {
  return (req: express.Request, res: express.Response) => {
    res.status(404).send("404 Not Found");
  };
}
