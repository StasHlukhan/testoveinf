import React, { InputHTMLAttributes } from "react";

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
}

const MyInput: React.FC<MyInputProps> = (props) => {
  return <input {...props} />;
};

export default MyInput
