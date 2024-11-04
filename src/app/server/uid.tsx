import { headers } from "next/headers";

export const getUserPayloadData = () => {
  const reqHeaders = headers();
  const userPayloadHeader = reqHeaders.get("x-user-payload");

  if (userPayloadHeader) {
    // Check if userPayloadHeader is not null
    try {
      const userPayload = JSON.parse(userPayloadHeader);
      return { id: userPayload.id, role: userPayload.role };
    } catch (error) {
      console.error("Error parsing x-user-payload:", error);
      return null;
    }
  }

  return null;
};
