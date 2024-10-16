export const generateOtp = (size: number = 5): string => {
  const digits = "0123456789";
  let otp = "";

  // Generate a random OTP with the given length
  for (let i = 0; i < size; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  return otp;
};
