import React from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import MyNavbar from "./UI/MyNavbar";

const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Posts />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
