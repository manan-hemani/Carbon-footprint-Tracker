import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
  // Feedback msg alert not fully functional but just for presentation purpose
  const submitAlert = () => {
    alert("Your Feedback is Submitted! Thank You😊");
    console.log(submitName, submitEmail, submitSubject, submitMessage);
  };

  const [submitName, setsubmitName] = useState("");
  const handleSubmitName = (e) => {
    setsubmitName(e.target.value);
  };
  const [submitEmail, setsubmitEmail] = useState("");
  const handleSubmitEmail = (e) => {
    setsubmitEmail(e.target.value);
  };
  const [submitSubject, setsubmitSubject] = useState("");
  const handleSubmitSubject = (e) => {
    setsubmitSubject(e.target.value);
  };
  const [submitMessage, setsubmitMessage] = useState("");
  const handleSubmitMessage = (e) => {
    setsubmitMessage(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="contact">
        <h3>Contact Us</h3>
        <p>
          We're here to help! Whether you have a question, need support, or just
          want to share your thoughts, feel free to reach out to us. We’re
          committed to making your experience with the Carbon Footprint Tracker
          as smooth and beneficial as possible.
        </p>
        <h3>Contact Infromation</h3>
        <ul>
          <li>
            <b>Email: </b>
            <a href="mailto:mananhemani01@gmail.com">mananhemani01@gmail.com</a>
          </li>
          <li>
            <b>Phone: </b>
            +1234567890
          </li>
          <li>
            <b>Address:</b>
            <p>
              Carbon Footprint Tracker
              <br />
              ABC LANE
              <br />
              Bangalore, 560069
              <br />
              India
            </p>
          </li>
        </ul>

        <h3>Send Us a Message</h3>
        <p>
          Have a specific question or need assistance? Use the form below to get
          in touch with us. We aim to respond within 24-48 hours.
        </p>
        <ul>
          <form action="submit">
            <label htmlFor="Name">
              <li>
                Name:
                <input
                  type="text"
                  placeholder="Your Name"
                  value={submitName}
                  onChange={handleSubmitName}
                />
              </li>
            </label>
            <label htmlFor="Email:">
              <li>
                Email:
                <input
                  type="email"
                  placeholder="Your Email"
                  value={submitEmail}
                  onChange={handleSubmitEmail}
                />
              </li>
            </label>
            <label htmlFor="Subject">
              <li>
                Subject:
                <input
                  type="text"
                  placeholder="Your Subject"
                  value={submitSubject}
                  onChange={handleSubmitSubject}
                />
              </li>
            </label>
            <label htmlFor="Message">
              <li>
                Message:
                <input
                  type="text"
                  placeholder="Your Message"
                  value={submitMessage}
                  onChange={handleSubmitMessage}
                />
              </li>
            </label>
          </form>
          <button onClick={submitAlert}>Submit</button>
        </ul>
      </div>
      <Footer />
    </>
  );
}
