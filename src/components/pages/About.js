import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/About.module.css";

const About = () => {
  const aboutRef = useNav("About");

  return (
    <div>
      <section ref={aboutRef} id="aboutPage" className={styles.container}>
      
        <div className={styles.about}>
          <img className={styles.headshot} src="/images/trina-poppies.png" />
          <div className={styles.aboutText}>
          <h1>About</h1>
          <h2>Nice to Meet You!</h2>
          <p>
            Hi! I’m Katrina. I’m a web developer and lover of the arts. My greatest assets are my creativity and my work ethic, and my
            aim is to implement those qualities while exploring the world of web
            development as either a front-end or full-stack software engineer
            and continue to develop my skills as a coder. My current favorite
            coding languages are React, Javascript, and CSS because they allow
            me to create dynamic and visually appealing web applications. I have
            a passion for the visual arts and I love that coding allows me to
            translate all of the shapes and colors that are continuously
            blooming in my brain into practical applications that will be put to
            use.
          </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
