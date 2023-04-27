import React, { useContext } from "react";
// import { NavContext } from "../../context/NavProvider";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/About.module.css";

const About = () => {
  // const { activeLinkId } = useContext(NavContext);
  const aboutRef = useNav("About");

  return (
    <div>
      <section ref={aboutRef} id="aboutPage" className={styles.container}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.about}>
          <div className={styles.aboutLeft}>
            {/* <h1>About</h1> */}
            <img className={styles.headshot} src="/images/trina-sunset.png" />
            <div className={styles.aboutText}>
              <h2 className={styles.header}>Nice to Meet You!</h2>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <h2 className={styles.header}>Who am I?</h2>
            <p>
              Hi, there! I’m Katrina. I’m a web developer and lover of the arts.
              My greatest assets are my creativity and my work ethic, and my aim
              is to implement those qualities while exploring the world of web
              development as either a front-end or full-stack software engineer
              and continue to develop my skills as a coder. My current favorite
              coding languages are React, Javascript, and CSS because they allow
              me to create dynamic and visually appealing web applications. I
              have a passion for the visual arts and I love that coding allows
              me to translate all of the shapes and colors that are continuously
              blooming in my brain into practical applications that will be put
              to use.
            </p>
            <div className={styles.right}>
              <h2 className={styles.header}>Education</h2>
              <div className={styles.gh}>
                <div className={styles.ghText}>
                  <h2>The Grace Hopper Program Web Development Bootcamp</h2>
                  <h2 className={styles.date}>11/22 - 04/23</h2>
                  <p>
                    Full-time, immersive web development program designed to
                    equip students with the skills necessary to build full stack
                    web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.techStack}>
          <h1>My Toolbox</h1>
          <div className={styles.toolBox}>
            <div className={styles.tbTop}>
              <div className={styles.tool}>
                <img src="/images/icons/postgres.png" className={styles.icon} />
                <p>Postgres</p>
              </div>
              <div className={styles.tool}>
                <img src="/images/icons/express.png" className={styles.icon} />
                <p>Express</p>
              </div>
              <div className={styles.tool}>
                <img src="/images/icons/react.png" className={styles.icon} />
                <p>React</p>
              </div>
              <div className={styles.tool}>
                <img src="/images/icons/node.png" className={styles.icon} />
                <p>Node</p>
              </div>
            </div>
            <div className={styles.tbBottom}>
              <div className={styles.tool}>
                <img src="/images/icons/html.png" className={styles.icon} />
                <p>HTML5</p>
              </div>
              <div className={styles.tool}>
                <img src="/images/icons/css.png" className={styles.icon} />
                <p>CSS3</p>
              </div>
              <div className={styles.tool}>
                <img
                  src="/images/icons/javascript.png"
                  className={styles.icon}
                />
                <p>JavaScript</p>
              </div>
              <div className={styles.tool}>
                <img src="/images/icons/git.png" className={styles.icon} />
                <p>Git</p>
              </div>
              <div className={styles.tool}>
                <img src="/images/icons/github.png" className={styles.icon} />
                <p>Github</p>
              </div>
              <div className={styles.tool}>
                <img
                  src="/images/icons/adobe-suite.png"
                  className={styles.icon}
                />
                <p>Adobe Suite</p>
              </div>
            </div>
          </div>
          <div className={styles.progress}>
          <h2 className={styles.header}>What I'm Currently Working On: </h2>
          <p>Improving both my general CSS and CSS Keyframes skills, further deepening my knowledge of React, and having fun learning React Native so that I can start developing mobile applications soon as well.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
