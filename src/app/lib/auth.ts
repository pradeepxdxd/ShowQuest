import { jwtVerify, SignJWT } from "jose";
import { nanoid } from "nanoid";

interface UserJWTPayload {
  jti: string;
  iat: number;
}

export const getSecretKey = () => {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRETKEY;

  if (!secret || secret.length === 0) {
    throw new Error(
      "The environment variable NEXT_PUBLIC_JWT_SECRETKEY is not set"
    );
  }
  return secret;
};

export const createToken = async () => {
  return await new SignJWT({})
    .setProtectedHeader({
      alg: "HS256",
    }) // algorithm
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setJti(nanoid())
    .setExpirationTime("30 days") // token expiration time, e.g., "1 day"
    .sign(new TextEncoder().encode(getSecretKey())); // secretKey generated from previous step
};

export const verifyToken = async (token: string) => {
  try {
    // verify token
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getSecretKey()),
      {
        issuer: process.env.JWT_ISSUER, // issuer
        audience: process.env.JWT_AUDIENCE, // audience
      }
    );
    return verified.payload as UserJWTPayload;
  } 
  catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(`Token has expired: ${e.message}`);
    } 
    else {
      throw new Error("Token has expired");
    }
  }
};
