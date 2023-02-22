import React from "react";
import { useNav } from "../../hooks/useNav";

const Contact = () => {
  const contactRef = useNav("Contact");

  return (
    <div>
      <section ref={contactRef} id="contactPage" className="secondary-section">
        <h1>Contact</h1>
      </section>
    </div>
  );
};

export default Contact;