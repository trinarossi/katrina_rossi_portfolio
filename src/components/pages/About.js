import React from "react";
import { useNav } from "../../hooks/useNav";

const About = () => {
  const aboutRef = useNav("About");

  return (
    <div>
      <section ref={aboutRef} id="aboutPage" className="secondary-section">
        <h1>About</h1>
      </section>
    </div>
  );
};

export default About;