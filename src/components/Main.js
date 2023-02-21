import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from "./index"

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
};

export default Main;