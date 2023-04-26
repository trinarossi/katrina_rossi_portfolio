import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./index";
import { About } from "./index";
// import { Skills } from "./index";
import { Portfolio } from "./index";
import { Contact } from "./index";
import NavProvider from "../context/NavProvider";

const Main = () => {
  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <About />
        {/* <Skills /> */}
        <Portfolio />
        <Contact />
        <Footer />
      </NavProvider>
    </div>
  );
};

export default Main;
