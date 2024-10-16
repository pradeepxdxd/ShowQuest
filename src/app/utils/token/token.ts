import jwt from "jsonwebtoken";

export const generateToken = (payload: object) => {
  const secretKey = process.env.NEXT_PUBLIC_JWT_SECRETKEY;

  if (!secretKey) {
    throw new Error("JWT Secret key is not defined");
  }

  return jwt.sign(payload, secretKey);
};
