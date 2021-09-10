import React from "react";
import { Link } from "react-router-dom";
import { NavbarStyle } from "../../styles/styles";

const MyNavbar = () => {
  return (
    <NavbarStyle>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/about">О сайте</Link>
        <Link to="/">Посты</Link>
      </div>
    </NavbarStyle>
  );
};

export default MyNavbar;
