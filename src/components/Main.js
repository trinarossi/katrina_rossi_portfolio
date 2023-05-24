import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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
        <Footer />
      </NavProvider>
    </div>
  );
};

export default Main;
