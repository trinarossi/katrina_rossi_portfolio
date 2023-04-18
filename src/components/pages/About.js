import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/About.module.css";

const About = () => {
  const aboutRef = useNav("About");

  return (
    <div>
      <section ref={aboutRef} id="aboutPage" className={styles.container}>
        <div className={styles.left}>
          <h1>About</h1>
          <img className={styles.headshot} src="/images/headshot.png" />
          <h2>Nice to Meet You!</h2>
          <p>
            Hi! I’m Katrina. I’m a web developer and lover of the arts. Before
            the pandemic I was an actress working mainly in short films,
            commercials, and theater. However, I wasn’t completely satisfied
            with this lifestyle. The near-halt on the acting industry in the
            earlier months of the pandemic forced me to reevaluate my career
            choices and I decided to search for a career that was more
            fulfilling to me. Over the next two years I went back to school and
            immersed myself in several different professional fields while
            working various jobs such as nannying, singing, and becoming a
            certified nursing assistant at Northwestern Hospital. Yet, it wasn’t
            until I tried coding and discovered how I could combine my love for
            creativity and logic into a career that I felt I had truly found my
            path. My greatest assets are my creativity and my work ethic, and my
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
        <div className={styles.right}>
          <img className={styles.toolbox} src="/images/toolbox.png" />
          <h2>Education</h2>
          <div className={styles.gh}>
            <img className={styles.ghIcon} src="/images/gh.png" />
            <div className={styles.ghText}>
              <h2>The Grace Hopper Program Web Development Bootcamp</h2>
              <h2>11/22 - 04/23</h2>
              <p>
                Full-time, immersive web development program designed to equip
                students with the skills necessary to build full stack web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
