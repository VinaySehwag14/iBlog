import React from "react";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./topbar/TopBar";

const App = () => {
  return (
    <>
      <TopBar />
      <Single />
      {/* <Home /> */}
    </>
  );
};

export default App;
