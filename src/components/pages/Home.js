import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/Home.module.css";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <div>
      <section ref={homeRef} id="homePage" className={styles.container}>
        <img className={styles.tab} src="/images/homepage_tab.png" />
        <div className={styles.trinaContainer}>
          <img className={styles.trina} src="/images/trina-no-border.png" />
        </div>
      </section>
    </div>
  );
};

export default Home;
