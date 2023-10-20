import { getConfig } from "../config/config";
import jwt from "jsonwebtoken";

export const generateToken = (payload: any, expired: number) => {
  const { jwt_secret } = getConfig();
  return jwt.sign(payload, jwt_secret, {
    expiresIn: expired,
  });
};
