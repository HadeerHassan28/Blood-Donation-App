import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const serviceId = "service_qikwrd7";
  const templateId = "template_gpnjabj";

  emailjs.init("fVLokjsl-V-BCyU5i");

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "message") {
      setMessage(value);
    }
  }
  function sendEmail(event) {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams).then(
      (result) => {
        console.log(result.text);
        toast.success("thank u for contact us", { duration: 2000 });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      },
      (error) => {
        toast.error("error, please try again later", { duration: 2000 });
      }
    );
  }

  return (
    <div className="container py-5">
      <div className="text-center p-3 mb-3">
        <h3 className="text-danger">Connect With Us</h3>
        <p className="text-muted ">
          Whether you want some help or just to ask us a question, you are
          welcome to do it using the form below.
        </p>
      </div>
      <form className={styles.customForm} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="form-control mb-2"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control mb-2"
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          className="form-control mb-2"
          value={phone}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-3"
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn btn-outline-danger d-flex ms-auto">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
