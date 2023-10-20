import { Response } from "express";

export const errorHandler = (err: string, code: number) => {
  const res: Response = <Response>{};
  return res.status(code).send({ error: err });
};
