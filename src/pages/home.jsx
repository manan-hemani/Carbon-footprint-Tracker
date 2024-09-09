import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

// FIX THIS NAVIGATE TO INSTRUCTIONS PAGE USING BTN OR USE IT AS NAVBAR UL LI ONE

const Home = () => {
  const navigate = useNavigate();
  // btn to navigate to instructions page
  const handleClick = () => {
    navigate("/instruction.jsx");
  };
  return (
    <>
      <Navbar />
      <div className="home">
        <h2>Carbon Footprint Tracker</h2>
        <div className="container-home">
          <img
            src={require("../Images/carbon-footprint.jpg")}
            alt="co2"
            width="300px"
          />

          <p>
            Welcome to the Carbon Footprint Tracker, your go-to platform for
            monitoring and reducing your environmental impact. In today’s world,
            where climate change is a pressing concern, it’s more important than
            ever to be aware of how our daily activities contribute to carbon
            emissions. Whether it's the energy we use at home, the
            transportation choices we make, or the waste we generate, every
            action has a carbon cost. Our tracker is designed to help you easily
            measure and understand your carbon footprint, providing you with the
            insights needed to make more eco-friendly choices.
            <br />
            By using the Carbon Footprint Tracker, you can set personal goals,
            monitor your progress, and discover practical ways to reduce your
            emissions. Our tool offers customized tips and strategies tailored
            to your lifestyle, making sustainability more accessible and
            achievable. Together, we can take meaningful steps towards a
            healthier planet, ensuring a better future for generations to come.
            Join us on this important journey and see how small changes can lead
            to significant positive impacts on the environment.
          </p>
        </div>
        <div className="form-home">
          <h3>
            Fill The Form to Checkout how much CO2 emission is caused by you and
            how you can reduce it.
          </h3>
          <div className="home-btn-container">
            <div className="home-btn">
              <img src={require("../Images/form.png")} alt="form" />
              <h4>Fill Out The Form</h4>
            </div>
            <div className="home-form-btn">
              <button onClick={handleClick}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
