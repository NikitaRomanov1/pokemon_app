import React from "react";
import { ButtonStyle } from "../../styles/styles";

const MyButton = ({ children, ...props }) => {
  return (
    <ButtonStyle
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </ButtonStyle>
  );
};

export default MyButton;
