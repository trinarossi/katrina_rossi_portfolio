import React from 'react';
import Header from "./Header"
import { Routes, Route } from "react-router-dom"
import { Home } from "./index"

const Main = () => {
  return (
    <div>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
    </div>
  )
};

export default Main;