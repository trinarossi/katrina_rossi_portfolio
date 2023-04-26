import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/Skills.module.css";

const Skills = () => {
  const skillsRef = useNav("Skills");

  return (
    <div>
      <section ref={skillsRef} id="skillsPage" className={styles.container}>
        <div className={styles.right}>
          <h1>Education</h1>
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

export default Skills;