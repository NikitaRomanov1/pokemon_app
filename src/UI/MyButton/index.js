import React from "react";
import { ButtonStyle } from "../../styles/styles";

const MyButton = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default MyButton;
