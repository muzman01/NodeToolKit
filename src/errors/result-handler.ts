import { Request, Response, NextFunction } from "express";

interface CustomResponse extends Response {
  sendResult: (data: any, code?: number) => void;
}

export function resultHandler() {
  return function (req: Request, res: CustomResponse, next: NextFunction) {
    res.sendResult = (data: any, code: number = 200) => {
      res.status(code).send({ result: data });
    };
    next();
  };
}
