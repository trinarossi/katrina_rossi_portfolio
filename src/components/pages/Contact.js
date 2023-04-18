import React from "react";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const contactRef = useNav("Contact");

  return (
    <div>
      <section ref={contactRef} id="contactPage" className={styles.container}>
        <h1>Contact</h1>
        <h2></h2>
      </section>
    </div>
  );
};

export default Contact;