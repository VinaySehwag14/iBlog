import React from "react";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./component/topbar/TopBar";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
      <TopBar />
      <Login />
      {/* <Home /> */}
    </>
  );
};

export default App;
