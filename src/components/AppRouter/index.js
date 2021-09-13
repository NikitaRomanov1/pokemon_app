import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router";
import { AuthContext } from "../../context";
import MyLoader from "../../UI/MyLoader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <MyLoader />;
  }
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route, index) => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route, index) => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
