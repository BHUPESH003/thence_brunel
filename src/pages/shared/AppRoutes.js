import React from "react";

const Home = React.lazy(() => import("../Home/Home.jsx"));
const RegistrationForm = React.lazy(() => import("../RegistrationForm/RegistrationForm.jsx"));
const Success = React.lazy(() => import("../Success/Success.jsx"));

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/registration", exact: true, name: "Registration", component: RegistrationForm },
  { path: "/success", exact: true, name: "Registration", component: Success },


];

export default routes;