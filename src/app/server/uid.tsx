import { headers } from "next/headers";

export const getUserPayloadData = () => {
  const reqHeaders = headers();
  const userPayloadHeader = reqHeaders.get("x-user-payload");

  if (typeof userPayloadHeader === "string") {
    const userPayload = JSON.parse(userPayloadHeader);
    return { id: userPayload.id };
  }
  return null;
};
