import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNav } from "../../hooks/useNav";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const contactRef = useNav("Contact");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqlic3h",
        "template_oopozby",
        form.current,
        "G0z5QVk8PSPxSDybt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section ref={contactRef} id="contactPage" className={styles.container}>
        {/* <div className={styles.trench}></div> */}
        <section className={styles.left}>
        <div className={styles.contactText}>
          <h1>Contact</h1>
          <h2>
            I'd love to hear from you! Please feel free to fill out this form to
            ask for my resume, share ideas to collaborate on, or just say "hey!"
          </h2>
          <div className={styles.email}>
            <img src="/images/icons/email.png" />
            <p>katrinarossidev@gmail.com</p>
          </div>
        </div>
        <div className={styles.emailForm}>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
        </section>
        <div className={styles.socials}>
          <h2>You can also find me here:</h2>
          <div className={styles.linkedin}>
            <img className={styles.icon} src="/images/icons/linkedin.png" />
            <a
              href="https://www.linkedin.com/in/katrina-rossi/"
              target="_blank"
            >
              <p>linkedin.com/in/katrina-rossi</p>
            </a>
          </div>
          <div className={styles.github}>
            <img
              className={styles.icon}
              src="/images/icons/github-purple.png"
            />
            <a href="https://github.com/trinarossi" target="_blank">
              <p>github.com/trinarossi</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
