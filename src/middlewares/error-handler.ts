import { Request, Response } from "express";


export const errorHandler = (
  req: Request,
  res: Response,
  err: string,
  code: number
) => {
  return res.send(code).send({ errors: [{ message: err }] });
};
