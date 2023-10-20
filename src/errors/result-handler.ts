export const resultHandler = (res: any, data: any, code: number) => {
  return res.status(code).send({ result: data });
};
