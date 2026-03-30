import { useState, useEffect, useMemo } from "react";

import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

import VuiBox from "components/VuiBox";

import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import routes from "routes";

import { useVisionUIController, setMiniSidenav } from "context";
import FloatingMenu from "examples/FloatingMenu";

export default function App() {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const [isLight, setIsLight] = useState(false);
  const { pathname } = useLocation();

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });
    setRtlCache(cacheRtl);
  }, []);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const handleToggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }
      return null;
    });

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        <div id="page-wrapper" className={isLight ? "light-mode-filter" : ""}>
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/developer" />
          </Switch>
        </div>
        {!pathname.startsWith('/blog') && <FloatingMenu onToggleTheme={handleToggleTheme} isLight={isLight} />}
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="page-wrapper" className={isLight ? "light-mode-filter" : ""}>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/developer" />
        </Switch>
      </div>
      {!pathname.startsWith('/blog') && <FloatingMenu onToggleTheme={handleToggleTheme} isLight={isLight} />}
    </ThemeProvider>
  );
}
