//@ts-check
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/header/index.jsx";
import Sidebar from "../components/sidebar/index.jsx";
import ThemeRoutes from "../routes/routing.jsx";

/**
 * @param {any} props
 */
const Layout = (props) => {
  return (
    <div
      id="main-wrapper"
      data-theme="light"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <Header />

      <Sidebar {...props} routes={ThemeRoutes} />

      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Switch>
            {ThemeRoutes.map((prop, key) => {
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              } else {
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              }
            })}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Layout;
