import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneProp {
  setPhone: (param: string) => void;
  phone: string;
}

const Phone: React.FC<PhoneProp> = ({ phone, setPhone }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChange = (ph: string) => {
    setPhone(ph);
  };

  return (
    <PhoneInput
      country={"in"}
      value={phone}
      onChange={handleOnChange}
      containerStyle={{ marginTop: "40px" }}
    />
  );
};

export default Phone;
