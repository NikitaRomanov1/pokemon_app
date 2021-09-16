import React from "react";
import { motion } from "framer-motion";
import { BackdropStyle } from "../../styles/styles";

const Backdrop = ({ children, onClick }) => {
  return (
    <BackdropStyle
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ oapcity: 0 }}
    >
      {children}
    </BackdropStyle>
  );
};

export default Backdrop;
