import { Request, Response } from "express";

export const resultHandler = (
  req: Request,
  res: Response,
  data: any,
  code: number
) => {
  return res.send(code).send({ result: data });
};
