import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const contactRef = useNav("Contact");

  return (
    <div>
      <section ref={contactRef} id="contactPage" className={styles.container}>
        <div className={styles.tab}>
          <div className={styles.contact}>
            <img className={styles.icon} src="/images/icons/email.png" />
            <p>katrinarossidev@gmail.com</p>
          </div>
          <div className={styles.contact}>
            <img className={styles.icon} src="/images/icons/linkedin.png" />
            <a
              href="https://www.linkedin.com/in/katrina-rossi/"
              target="_blank"
            >
              <p>linkedin.com/in/katrina-rossi</p>
            </a>
          </div>
          <div className={styles.contact}>
            <img
              className={styles.icon}
              src="/images/icons/github-purple.png"
            />
            <a href="https://github.com/trinarossi" target="_blank">
              <p>github.com/trinarossi</p>
            </a>
          </div>
          <img className={styles.thanks} src="/images/thanks.png" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
