import React from "react";
import { useNav } from "../../hooks/useNav";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <div>
      <section ref={homeRef} id="homePage">
        <h1>Home</h1>
      </section>
    </div>
  );
};

export default Home;