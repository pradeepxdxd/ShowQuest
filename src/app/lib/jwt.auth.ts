// import axios from "axios";
import xior from 'xior'

export const verifyJwtToken = async (token: string) => {
  const echoEndPoint: string = process.env
    .NEXT_PUBLIC_JWT_ECHO_ENDPOINT as string;
  const certStr: string = process.env
    .NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY as string;
  const encodedCertStr: string = encodeURIComponent(certStr);
  const audience: string = "showquest-f5feb";

  const verificationEndPoint: string = `${echoEndPoint}/verify?audience=${audience}&cert_str=${encodedCertStr}`;

  const requestInfo = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await xior.get(verificationEndPoint, requestInfo);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Token verification failed: ${error.message}`);
    }
    throw new Error(`Token verification failed`);
  }
};
