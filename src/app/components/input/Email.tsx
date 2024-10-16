import { AppDispatch, RootState } from "@/app/store";
import { setEmail } from "@/app/store/auth/auth.slice";
import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface EmailProp {
  setValidMail: (val: boolean) => void;
  flag: string;
}

const Email: React.FC<EmailProp> = ({ setValidMail, flag }) => {
  const { email } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (flag === "phone") {
      if (phoneRegex.test(e.target.value || "")) setValidMail(false);
      else setValidMail(true);
    } else if (flag === "email") {
      if (emailRegex.test(e.target.value || "")) setValidMail(false);
      else setValidMail(true);
    }
  };

  return (
    <>
      <TextField
        fullWidth
        id="fullWidth"
        value={email}
        onChange={handleOnChange}
        sx={{
          mt: 5,
          height: "40px",
          "& .MuiInputBase-root": {
            height: "100%",
          },
          "& input": {
            padding: "8px",
            border: "none",
          },
        }}
      />
    </>
  );
};

export default Email;
