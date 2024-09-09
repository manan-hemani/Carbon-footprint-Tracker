import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Reduce() {
  return (
    <>
      <Navbar />
      <div className="reduce">
        <h1>Ways to Reduce Co2 Emissions</h1>
        <img
          src={require("../Images/reduce.jpg")}
          alt="reduce co2"
          width={"70%"}
          height={"300px"}
        />
        <ul>
          <li>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Energy Efficiency:
            </span>{" "}
            Improve energy use in homes, buildings, and industries. This
            includes upgrading insulation, using energy-efficient appliances,
            and adopting energy-saving technologies. <br />
            <br />
            Turn off the lights when natural light is sufficient and when you
            leave the room. It’s that simple! <br /> <br />
            Power your computer down when you’re away. A computer turned off
            uses at least 65% less energy than a computer left on or idle on a
            screen saver.
          </li>
          <li>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Renewable Energy:
            </span>{" "}
            Switch to renewable energy sources such as solar, wind, and
            hydroelectric power instead of fossil fuels.
            <br /> <br />
            Use your windows wisely! If your climate control system is on, shut
            them…if you need a little fresh air, turn off the heat or AC.
            <br /> <br />
            Cut down the number of appliances you are running and you will save
            big on energy. For example, share your minifridge with roomates and
            minimize the number of printers in your office.
          </li>
          <li>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Transportation:
            </span>{" "}
            Use public transportation, carpool, bike, or walk when possible. If
            driving, consider electric or hybrid vehicles. <br /> <br />
            Instead of driving to work, many people opt for public transportto
            lower their carbon footprint. <br /> <br />
            Take a shared car instead of everyone driving separately, reducing
            the number of vehicles on the road.
          </li>
          <li>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Sustainable Practices:
            </span>{" "}
            Reduce waste by recycling and composting. Opt for products with
            minimal packaging and support sustainable brands.
            <br />
            <br />
            Take a few steps to a recycling center in your building to deposit
            aluminum cans, plastics, glass, office paper, newspaper, cardboard.
            Pickup of office electronics, bulk metal and surplus furniture can
            be arranged by contacting Facilities Work Management.
          </li>
          <li>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Conservation:
            </span>{" "}
            Protect and restore forests and other natural habitats that absorb
            carbon dioxide. Support reforestation and afforestation projects.
            <br /> <br />
            Print and copy on two sides, save single-sided pages for notes, and
            print only what you need.
          </li>
          <li>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Diet Changes:
            </span>{" "}
            Reduce meat and dairy consumption, as livestock farming produces
            significant greenhouse gases. Opt for a plant-based diet when
            possible. <br />
            <br />
            Incorporate more lentils, beans, tofu, and quinoa into your meals
            instead of animal-based proteins.
          </li>
          <li>
            <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Carbon Offsetting:
            </span>{" "}
            Invest in projects that reduce or capture carbon emissions, such as
            renewable energy projects or forest conservation initiatives.
            <br />
            <br />
            Homeowners and communities often organize tree-planting initiatives,
            which helps absorb CO₂ from the atmosphere and improve the
            environment.
          </li>
        </ul>
        <p>
          By incorporating these strategies, individuals and organizations can
          contribute to lowering carbon emissions and mitigating climate change. 😊
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Reduce;
