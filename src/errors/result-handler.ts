import { Request, Response } from "express";

export const resultHandler = (
  req: Request,
  res: Response,
  data: any,
  code: number
) => {
  return res.status(code).send({ result: data });
};
