import { headers } from "next/headers";

export const getUserPayloadData = () => {
  const reqHeaders = headers();
  const userPayloadHeader = reqHeaders.get("x-user-payload");

  let userPayload = null;
  if (typeof userPayloadHeader === "string") {
    userPayload = JSON.parse(userPayloadHeader);
  }

  return { id: userPayload.id };
};
