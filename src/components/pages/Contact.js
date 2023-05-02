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
        <div className={styles.left}>
          <div className={styles.contactText}>
            <h1 className={styles.title}>Contact</h1>
            <h2>I'd love to hear from you!</h2>
            <h2>
              Please feel free to fill out this form
              to ask for my resume, share ideas to collaborate on, or just say
              "hey!"
            </h2>
            <div className={styles.socials}>
              <h2>You can also find me here:</h2>
              <div className={styles.links}>
                <div className={styles.linkedin}>
                  <a
                    href="https://www.linkedin.com/in/katrina-rossi/"
                    target="_blank"
                  >
                    <img
                      className={styles.icon2}
                      src="/images/icons/linkedin.png"
                    />
                  </a>
                </div>
                <div className={styles.github}>
                  <a href="https://github.com/trinarossi" target="_blank">
                    <img
                      className={styles.icon}
                      src="/images/icons/github.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {/* <div className={styles.email}>
            <img src="/images/icons/email.png" />
            <p>katrinarossidev@gmail.com</p>
          </div> */}
          <div className={styles.emailForm}>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Britney Spears" required/>
              <label>Email</label>
              <input type="email" name="user_email" placeholder="oops@ididitagain.com" required/>
              <label>Message</label>
              <textarea name="message" placeholder="Oh, it's beautiful, but wait a minute, isn't this...but I thought the old lady dropped it into the ocean in the end? Aw, you shouldn't have!" required/>
              <input className={styles.submit} type="submit" value="Send" />
            </form>
          </div>
          {/* <div className={styles.bye}>
            <p>Thanks for stopping by!</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
