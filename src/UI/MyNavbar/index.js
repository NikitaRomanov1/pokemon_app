import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import { NavbarStyle } from "../../styles/styles";
import MyButton from "../MyButton";

const MyNavbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <NavbarStyle>
      <MyButton light onClick={logout}>
        Exit
      </MyButton>
      <div style={{ marginLeft: "auto" }}>
        <Link to="/about">About</Link>
        <Link to="/">Posts</Link>
      </div>
    </NavbarStyle>
  );
};

export default MyNavbar;
