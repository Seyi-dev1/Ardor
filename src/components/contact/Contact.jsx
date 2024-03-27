import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      icon: <FaMapMarkerAlt style={{ color: "black" }} />,
      infoText: "San Francisco, CA.",
    },
    {
      id: 2,
      icon: <FaPaperPlane style={{ color: "black" }} />,
      infoText: "support@fervorfinance.com",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cptzedq",
        "template_e4lvztp",
        form.current,
        "WsRZ5KdR5fEW_WcxF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact_container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span className="contact_title">get in touch</span>
        <h1 className="contact_subtitle">Contact Us</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Just Say Hi</h3>
          <p className="contact_text">
            Any question? Reach out to us and we'll get back to you shortly.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <input type="text" placeholder="Fullname" name="name" />
            </div>
            <div className="row">
              <input name="phone" type="text" placeholder="Phone" />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="row">
              <textarea
                name="message"
                placeholder="message"
                required
              ></textarea>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
            >
              <button type="submit" value="Send">
                Send
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
