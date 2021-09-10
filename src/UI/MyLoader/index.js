import React from "react";
import { LoaderStyle } from "../../styles/styles";

const MyLoader = () => {
  return (
    <LoaderStyle
      animate={{
        rotate: 360,
        scale: [1, 1.5, 2],
      }}
      transition={{
        times: [0, 1.5, 2],
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    ></LoaderStyle>
  );
};

export default MyLoader;
