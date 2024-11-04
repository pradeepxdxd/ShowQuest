import { Role } from "@/firebase/actions/action.types";
import { jwtVerify, SignJWT } from "jose";
import { nanoid } from "nanoid";

export interface UserJWTPayload {
  jti: string;
  iat: number;
  id: string;
  role: Role;
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

export const generateJoseToken = async (payload: {
  id: string;
  role: Role;
  // name: string;
  // email: string;
}) => {
  return await new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    }) // algorithm
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setJti(nanoid())
    .setExpirationTime("30 days") // token expiration time, e.g., "1 day"
    .sign(new TextEncoder().encode(getSecretKey())); // secretKey generated from previous step
};

export const verifyJoseToken = async (token: string) => {
  try {
    // verify token
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getSecretKey()),
      {
        issuer: process.env.JWT_ISSUER, // issuer
        audience: process.env.JWT_AUDIENCE, // audience
        algorithms: ["HS256"],
      }
    );
    return verified.payload as unknown as UserJWTPayload;
  } catch (e: unknown) {
    if (e instanceof Error) {
      // throw new Error(`Token has expired: ${e.message}`);
      console.log(`Token has expired: ${e.message}`);
    } else {
      console.log(`Token has expired`);
      // throw new Error("Token has expired");
    }
  }
};
