import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getConfig } from "../config/config";

export const requireAuth = (req: any, res: Response, next: NextFunction) => {
  if (!req.header) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send({ message: "No token, authorization denied" });
  }

  // Yapılandırma kontrolü
  const { jwt_secret } = getConfig();
  if (!jwt_secret) {
    return res
      .status(500)
      .send({ message: "JWT Secret configuration is missing." });
  }

  try {
    // Token doğrulama
    jwt.verify(token, jwt_secret, (err: any, user: any) => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Invalid token, authorization denied." });
      }

      req.user = user;
      next();
    });
  } catch (error: any) {
    res.status(401).send({ message: error.message });
  }
};
