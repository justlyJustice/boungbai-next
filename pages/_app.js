import React from "react";
import Router from "next/router";
import NProgress from "nprogress";

import "../styles/globals.css";
import "../styles/css/dashboard.css";
import "../styles/css/admin.css";
import "nprogress/nprogress.css";

import "bootstrap/dist/css/bootstrap.css";
import Layout from "components/Layout";
import { UserProvider } from "context/UserContext";
import { AdminProvider } from "context/AdminContext";
/* import "bootstrap/dist/js/bootstrap.min"; */

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <AdminProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </AdminProvider>
  );
}

export default MyApp;
