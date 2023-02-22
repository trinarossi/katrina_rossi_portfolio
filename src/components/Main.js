import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./index";
import { About } from "./index";
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
        <Portfolio />
        <Contact />
      </NavProvider>
    </div>
  );
};

export default Main;
