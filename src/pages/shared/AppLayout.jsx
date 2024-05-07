import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routes from "./AppRoutes";
import HomeNavbar from "../../components/HomeNavbar";
import LogoNavbar from "../../components/LogoNavbar";
import Footer from "../../components/Footer";
import { useAtomValue } from "jotai";
import { navbarAtom } from "../../store";
const AppLayout = (props) => {
  const useNavAtom = useAtomValue(navbarAtom);
  console.log(useNavAtom);
  return (
    <>
      <Suspense fallback={"Loading"}>
        <BrowserRouter>
          {useNavAtom ? <LogoNavbar /> : <HomeNavbar />}
          <Routes>
            {routes.map(
              (appRoute, idx) =>
                appRoute.component && (
                  <Route
                    caseSensitive={false}
                    key={idx}
                    path={`/${appRoute.path}`}
                    element={<appRoute.component />}
                  />
                )
            )}
          </Routes>{" "}
          <Outlet />{" "}
        </BrowserRouter>
        {!useNavAtom && <Footer />}
      </Suspense>
    </>
  );
};
export default React.memo(AppLayout);
