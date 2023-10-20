export const errorHandler = (res: any, err: string, code: number) => {
  return res.status(code).send({ error: err });
};
