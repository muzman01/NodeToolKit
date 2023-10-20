import { Response } from "express";

export const resultHandler = (data: any, code: number) => {
  const res: Response = <Response>{};
  return res.status(code).send({ result: data });
};
