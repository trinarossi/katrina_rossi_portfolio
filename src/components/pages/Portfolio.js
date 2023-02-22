import React from "react";
import { useNav } from "../../hooks/useNav";

const Portfolio = () => {
  const portfolioRef = useNav("Portfolio");

  return (
    <div>
      <section ref={portfolioRef} id="portfolioPage">
        <h1>Portfolio</h1>
      </section>
    </div>
  );
};

export default Portfolio;