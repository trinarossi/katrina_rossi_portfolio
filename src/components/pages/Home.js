import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/Home.module.css";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <div>
      <section ref={homeRef} id="homePage" className={styles.container}>
        <div className={styles.tab}>
          <img className={styles.hiThere} src="/images/hi-there.png"/>
          <div className={styles.trinaContainer}>
            <img className={styles.trina} src="/images/trina-no-border.png" />
          </div>
          <img className={styles.banner} src="/images/dev-des-banner.png"/>
        </div>
        <div className={styles.bottom}></div>
      </section>
    </div>
  );
};

export default Home;
