import React from "react";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./component/topbar/TopBar";
import Write from "./pages/write/Write";

const App = () => {
  return (
    <>
      <TopBar />
      <Write />
      {/* <Home /> */}
    </>
  );
};

export default App;
