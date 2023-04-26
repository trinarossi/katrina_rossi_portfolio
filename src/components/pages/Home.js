import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/Home.module.css";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <div>
      <section ref={homeRef} id="homePage" className={styles.container}>
        {/* <div className={styles.banner}></div> */}
        <div className={styles.clouds}>
          <img src="/images/clouds/cloud1.png" className={styles.cloud1} />
          <img src="/images/clouds/cloud2.png" className={styles.cloud2} />
          <img src="/images/clouds/cloud3.png" className={styles.cloud3} />
          <img src="/images/clouds/cloud4.png" className={styles.cloud4} />
          <img src="/images/clouds/cloud5.png" className={styles.cloud5} />
        </div>
        <div className={styles.text}>
          <h1>Hi, there! I'm Katrina.</h1>
          <h2>
            I'm a developer, designer, &
          </h2>
          <h2>lover of warm breezes on sunny days.</h2>
        </div>
        <div className={styles.hills}>
          {/* <div className={styles.hill1}></div>
          <div className={styles.hill2}></div>
          <div className={styles.hill3}></div> */}
        </div>
        <div className={styles.light}></div>
        <div className={styles.sun}></div>
      </section>
    </div>
  );
};

export default Home;
