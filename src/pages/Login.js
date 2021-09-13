import React, { useContext } from "react";
import { AuthContext } from "../context";
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div
      style={{
        margin: "0 auto",
        width: "25%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
