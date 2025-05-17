import React from "react";
import "../styles/Contact.scss";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = ({ setTopic, handleDownload }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div className="contact_container">
      <h2>Contact Me</h2>
      <form className="contact_form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            rows="5"
            placeholder="Say Hello!"
            value={formData.message}
            required
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }></textarea>
        </label>
        <button type="submit">Send</button>
      </form>

      <div className="contact_cta">
        <h3>Not ready to contact yet? </h3>
        <button onClick={() => setTopic("projects")}>
          Check out my projects
        </button>{" "}
        or <button onClick={() => handleDownload()}>download my resume!</button>
      </div>
    </div>
  );
};

export default Contact;
