import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = async (
  req: any,
  res: Response,
  next: NextFunction,
) => {
  if (!req.header) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    let tmp = req.header("Authorization");

    const token = tmp ? tmp.slice(7, tmp.length) : "";
    if (!token) {
      return res.status(401).json({ message: "Invalid Authentification" });
    }
    jwt.verify(token, "muzman", (err: any, user: any) => {
      if (err) {
        return res.status(401).json({ message: "Invalid Authentification" });
      }
      req.user = user;
      next();
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
