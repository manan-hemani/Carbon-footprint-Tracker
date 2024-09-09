import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  // btn to navigate to main page i.e the form filling page
  const handleClick = () => {
    navigate("/main.jsx");
  };
  return (
    <>
      <Navbar />
      <div className="instruction">
        <h1>Calculate Your Carbon Footprint</h1>
        <h3>Read the Instructions to fill out form</h3>
        <ul>
          <li>
            For each tab, fill out the form and click on{" "}
            <span style={{ fontWeight: "bold" }}>SAVE</span> to save the form.
          </li>
          <li>
            All the{" "}
            <span style={{ fontWeight: "bold" }}>
              Fields are Important to Fill.
            </span>
          </li>
          <li>
            To add more than one details click on{" "}
            <span style={{ fontWeight: "bold" }}>ADD ANOTHER DEATIL</span> to
            fill the form for another details.
          </li>
          <li>
            Make sure that you have click on{" "}
            <span style={{ fontWeight: "bold" }}>Save</span> after filling all
            the fields in a particular tab to calculate the data.
          </li>
          <li>
            If you do not want to enter any data just type{" "}
            <span style={{ fontWeight: "bold" }}>0</span> in the particular
            field
          </li>
        </ul>
        <div className="btn">
          <button className="btn-instruction" onClick={handleClick}>
            Form
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
