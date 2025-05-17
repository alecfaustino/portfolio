import React from "react";
import "../styles/Contact.scss";

const Contact = ({ setTopic, handleDownload }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can later hook this into emailJS, Formspree, etc.
    alert("Message sent!");
  };

  return (
    <div className="contact_container">
      <h2>Contact Me</h2>
      <form className="contact_form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Name" required />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            rows="5"
            placeholder="Say Hello!"
            required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>

      <div className="contact_cta">
        <p>
          Not ready to contact yet?{" "}
          <button onClick={() => setTopic("projects")}>
            Check out my projects
          </button>{" "}
          or{" "}
          <button onClick={() => handleDownload()}>download my resume!</button>
        </p>
      </div>
    </div>
  );
};

export default Contact;
