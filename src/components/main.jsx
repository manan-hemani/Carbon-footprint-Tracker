import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  // Current topic selection highlight useState
  const [activeState, setactiveState] = useState("section1");
  const handleClick = (section) => {
    setactiveState(section);
  };

  // Facility , Year and Month useState
  const [selectFacilityChange, setselectFacilityChange] = useState("");
  const handleFacilityChange = (e) => {
    setselectFacilityChange(e.target.value);
  };
  const [selectYearChange, setselectYearChange] = useState("");
  const handleYearChange = (e) => {
    setselectYearChange(e.target.value);
  };
  const [selectMonthChange, setselectMonthChange] = useState("");
  const handleMonthChange = (e) => {
    setselectMonthChange(e.target.value);
  };

  // Fossil Fuels useState
  const [selectFuelTypeChange, setselectFuelTypeChange] = useState("");
  const handleFuelTypeChange = (e) => {
    setselectFuelTypeChange(e.target.value);
  };
  const [selectUnitChange, setselectUnitChange] = useState("");
  const handleUnitChange = (e) => {
    setselectUnitChange(e.target.value);
  };
  const [amountConsumed, setamountConsumed] = useState("");
  const handleAmountConsumed = (e) => {
    setamountConsumed(e.target.value);
  };

  // Electricity useState
  const [electricityAmountConsumed, setElectricityAmountConsumed] =
    useState("");
  const handleElectricityAmountConsumed = (e) => {
    setElectricityAmountConsumed(e.target.value);
  };
  const [selectElectricityTypeChange, setselectElectricityTypeChange] =
    useState("");
  const handleElectricityTypeChange = (e) => {
    setselectElectricityTypeChange(e.target.value);
  };
  const [selectElectricityUnitChange, setselectElectricityUnitChange] =
    useState("");
  const handleElectricityUnitChange = (e) => {
    setselectElectricityUnitChange(e.target.value);
  };

  // Water useState
  const [
    selectWaterDischargeSiteTypeChange,
    setselectWaterDischargeSiteTypeChange,
  ] = useState("");
  const handleWaterDischargeSiteTypeChange = (e) => {
    setselectWaterDischargeSiteTypeChange(e.target.value);
  };
  const [selectWaterTypeChange, setselectWaterTypeChange] = useState("");
  const handleWaterTypeChange = (e) => {
    setselectWaterTypeChange(e.target.value);
  };
  const [selectWaterUnitChange, setselectWaterUnitChange] = useState("");
  const handleWaterUnitChange = (e) => {
    setselectWaterUnitChange(e.target.value);
  };
  const [waterAmountConsumed, setWaterAmountConsumed] = useState("");
  const handleWaterAmountConsumed = (e) => {
    setWaterAmountConsumed(e.target.value);
  };

  // Travel useState
  const [SubOption, setSubOption] = useState("");
  const [selectModeOfTransportChange, setselectModeOfTransportChange] =
    useState("");

  const handleModeOfTransportChange = (e) => {
    setselectModeOfTransportChange(e.target.value);
    setSubOption("");
  };
  // for more options of travel like air, rail and road
  const handleSubOption = (e) => {
    setSubOption(e.target.value);
  };
  const [distanceTravelled, setDistanceTravelled] = useState("");
  const handleDistanceTravelled = (e) => {
    setDistanceTravelled(e.target.value);
  };

  // Waste useState
  const [selectWasteTypeChange, setselectWasteTypeChange] = useState("");
  const handleWasteTypeChange = (e) => {
    setselectWasteTypeChange(e.target.value);
  };
  const [selectWasteUnitChange, setselectWasteUnitChange] = useState("");
  const handleWasteUnitChange = (e) => {
    setselectWasteUnitChange(e.target.value);
  };
  const [selectwasteTreatmentTypeChange, setWasteTreatmentTypeChange] =
    useState("");
  const handleWasteTreatmentType = (e) => {
    setWasteTreatmentTypeChange(e.target.value);
  };
  const [wasteAmountConsumed, setWasteAmountConsumed] = useState("");
  const handleWasteAmountConsumed = (e) => {
    setWasteAmountConsumed(e.target.value);
  };

  // Home useState
  const [selectApplicationTypeChange, setselectApplicationTypeChange] =
    useState("");
  const handleApplicationTypeChange = (e) => {
    setselectApplicationTypeChange(e.target.value);
  };
  const [homeUnitConsumed, setHomeUnitConsumed] = useState("");
  const handleHomeUnitConsumed = (e) => {
    setHomeUnitConsumed(e.target.value);
  };

  // Offset useState

  const [numberOfTrees, setNumberOfTrees] = useState("");
  const handleNumberOfTrees = (e) => {
    setNumberOfTrees(e.target.value);
  };
  const [areaCoveredInSoil, setAreaCoveredInSoil] = useState("");
  const handleAreaCoveredInSoil = (e) => {
    setAreaCoveredInSoil(e.target.value);
  };
  const [areaCoveredInGrass, setAreaCoveredInGrass] = useState("");
  const handleAreaCoveredInGrass = (e) => {
    setAreaCoveredInGrass(e.target.value);
  };
  const [areaCoveredinWater, setAreaCoveredinWater] = useState("");
  const handleAreaCoveredinWater = (e) => {
    setAreaCoveredinWater(e.target.value);
  };

  // Save buttons function for all fields

  // Save Toast fuction
  const notify = () => toast.success("Saved successfully!");

  // useNavigate hook to navigate to another page and also navigate the inputted data to result page for calculation
  const navigate = useNavigate();

  // result inputted data transfer for calculations
  const handleResult = () => {
    if (
      selectYearChange !== "" &&
      selectFuelTypeChange !== "" &&
      selectUnitChange !== "" &&
      amountConsumed !== "" &&
      selectElectricityTypeChange !== "" &&
      selectElectricityUnitChange !== "" &&
      electricityAmountConsumed !== "" &&
      selectModeOfTransportChange !== "" &&
      distanceTravelled !== "" &&
      SubOption !== "" &&
      selectWaterTypeChange !== "" &&
      selectWaterDischargeSiteTypeChange !== "" &&
      selectWaterUnitChange !== "" &&
      waterAmountConsumed !== "" &&
      selectWasteTypeChange !== "" &&
      selectwasteTreatmentTypeChange !== "" &&
      selectWasteUnitChange !== "" &&
      wasteAmountConsumed !== "" &&
      numberOfTrees !== "" &&
      areaCoveredInSoil !== "" &&
      areaCoveredInGrass !== "" &&
      areaCoveredinWater !== "" &&
      selectApplicationTypeChange !== "" &&
      homeUnitConsumed !== ""
    ) {
      navigate("/result.jsx", {
        state: {
          selectYearChange,
          selectFuelTypeChange,
          selectUnitChange,
          amountConsumed,
          selectElectricityTypeChange,
          selectElectricityUnitChange,
          electricityAmountConsumed,
          selectModeOfTransportChange,
          distanceTravelled,
          SubOption,
          selectWaterTypeChange,
          selectWaterDischargeSiteTypeChange,
          selectWaterUnitChange,
          waterAmountConsumed,
          selectWasteTypeChange,
          selectwasteTreatmentTypeChange,
          selectWasteUnitChange,
          wasteAmountConsumed,
          numberOfTrees,
          areaCoveredInSoil,
          areaCoveredInGrass,
          areaCoveredinWater,
          selectApplicationTypeChange,
          homeUnitConsumed,
        },
      });
    } else {
      alert("Please Fill all the Fields in the form!");
    }
  };

  // Fuel Save
  const [, setFFBox] = useState(false);
  const handleFFSave = (e) => {
    e.preventDefault();
    if (
      selectFacilityChange === "" ||
      selectYearChange === "" ||
      selectMonthChange === "" ||
      selectFuelTypeChange === "" ||
      selectUnitChange === "" ||
      amountConsumed === ""
    ) {
      alert("Please fill the form!");
      return; // to stop toast to appear
    } else {
      setFFBox(true);
      notify();
    }
  };

  // Electricity Save
  const [, setEBox] = useState("false");
  const handleESave = (e) => {
    e.preventDefault();
    if (
      selectFacilityChange === "" ||
      selectYearChange === "" ||
      selectMonthChange === "" ||
      selectElectricityTypeChange === "" ||
      selectElectricityUnitChange === "" ||
      electricityAmountConsumed === ""
    ) {
      alert("Please fill the form!");
      return; // to stop toast to appear
    } else {
      setEBox("true");
      notify();
    }
  };

  // Travel Save
  const [, setTBox] = useState("false");
  const handleTSave = (e) => {
    e.preventDefault();
    if (
      selectFacilityChange === "" ||
      selectYearChange === "" ||
      selectMonthChange === "" ||
      selectModeOfTransportChange === "" ||
      distanceTravelled === "" ||
      SubOption === ""
    ) {
      alert("Please fill the form!");
      return;
    } else {
      setTBox("true");
      notify();
    }
  };

  // Water Save
  const [, setWBox] = useState("false");
  const handleWSave = (e) => {
    e.preventDefault();
    if (
      selectFacilityChange === "" ||
      selectYearChange === "" ||
      selectMonthChange === "" ||
      selectWaterTypeChange === "" ||
      selectWaterDischargeSiteTypeChange === "" ||
      selectWaterUnitChange === "" ||
      waterAmountConsumed === ""
    ) {
      alert("Please fill the form!");
      return;
    } else {
      setWBox("true");
      notify();
    }
  };

  // Waste Save
  const [, setWaBox] = useState("false");
  const handleWaSave = (e) => {
    e.preventDefault();
    if (
      selectFacilityChange === "" ||
      selectYearChange === "" ||
      selectMonthChange === "" ||
      selectWasteTypeChange === "" ||
      selectwasteTreatmentTypeChange === "" ||
      selectWasteUnitChange === "" ||
      wasteAmountConsumed === ""
    ) {
      alert("Please fill the form!");
      return;
    } else {
      setWaBox("true");
      notify();
    }
  };

  // Home Save
  const [, setHBox] = useState("false");
  const handleHSave = (e) => {
    e.preventDefault();
    if (
      selectFacilityChange === "" ||
      selectYearChange === "" ||
      selectMonthChange === "" ||
      selectApplicationTypeChange === "" ||
      homeUnitConsumed === ""
    ) {
      alert("Please fill the form!");
      return;
    } else {
      setHBox("true");
      notify();
    }
  };

  // Offset Save
  const [, setOBox] = useState("false");
  const handleOSave = (e) => {
    e.preventDefault();
    if (
      selectFacilityChange === "" ||
      selectYearChange === "" ||
      selectMonthChange === "" ||
      numberOfTrees === "" ||
      areaCoveredInSoil === "" ||
      areaCoveredInGrass === "" ||
      areaCoveredinWater === ""
    ) {
      alert("Please fill the form!");
      return;
    } else {
      setOBox("true");
      notify();
    }
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <h1>Calculate Your Carbon Footprint</h1>
        <ul>
          <li
            onClick={() => {
              handleClick("section1");
            }}
            className={activeState === "section1" ? "active-heading" : ""}
          >
            <img src={require("./../Images/gas-station 32px.png")} alt="fuel" />
            Fossil Fuels
          </li>
          <li
            onClick={() => {
              handleClick("section2");
            }}
            className={activeState === "section2" ? "active-heading" : ""}
          >
            <img
              src={require("./../Images/flash 32px.png")}
              alt="electricity"
            />
            Electricity
          </li>
          <li
            onClick={() => {
              handleClick("section3");
            }}
            className={activeState === "section3" ? "active-heading" : ""}
          >
            <img src={require("./../Images/water 32px.png")} alt="water" />
            Water
          </li>
          <li
            onClick={() => {
              handleClick("section4");
            }}
            className={activeState === "section4" ? "active-heading" : ""}
          >
            <img src={require("./../Images/travel 32px.png")} alt="travel" />
            Travel
          </li>
          <li
            onClick={() => {
              handleClick("section5");
            }}
            className={activeState === "section5" ? "active-heading" : ""}
          >
            <img src={require("./../Images/waste 32px.png")} alt="waste" />
            Waste
          </li>
          <li
            onClick={() => {
              handleClick("section6");
            }}
            className={activeState === "section6" ? "active-heading" : ""}
          >
            <img src={require("./../Images/home 32px.png")} alt="home" />
            Domestic
          </li>
          <li
            onClick={() => {
              handleClick("section7");
            }}
            className={activeState === "section7" ? "active-heading" : ""}
          >
            <img src={require("./../Images/leaf.png")} alt="offset" />
            Offset
          </li>
        </ul>

        <div className="form">
          {/* section1 Fuel */}
          {activeState === "section1" && (
            <form onSubmit={handleFFSave}>
              <div className="inside-form">
                <label>Facility: </label>
                <select
                  name="facility"
                  value={selectFacilityChange}
                  onChange={handleFacilityChange}
                >
                  <option value="" disabled hidden>
                    Select Facility
                  </option>
                  <option value="Hostel">Hostel</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Health center">Health Center</option>
                  <option value="Schools">School</option>
                  <option value="University">University</option>
                  <option value="BankShop">Bank/Shop</option>
                  <option value="Others">Others</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Year: </label>
                <select
                  name="year"
                  value={selectYearChange}
                  onChange={handleYearChange}
                >
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Month: </label>
                <select
                  name="month"
                  value={selectMonthChange}
                  onChange={handleMonthChange}
                >
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Fuel Type: </label>
                <select
                  name="fueltype"
                  value={selectFuelTypeChange}
                  onChange={handleFuelTypeChange}
                  id="fType"
                >
                  <option value="" disabled hidden>
                    Select Fuel Type
                  </option>
                  <option value="cng">CNG</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="lpg">LPG</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Unit: </label>
                <select
                  name="unit"
                  value={selectUnitChange}
                  onChange={handleUnitChange}
                  id="fUnit"
                >
                  <option value="" disabled hidden>
                    Select Unit
                  </option>
                  <option value="kg">kg</option>
                  <option value="tonne">tonne</option>
                  <option value="litre">litre</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Unit Consumed: </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={amountConsumed}
                  onChange={handleAmountConsumed}
                  id="fAmountConsumed"
                />
                <br />
              </div>
              <div className="form-btn">
                <button type="submit">Save</button>
                <ToastContainer />
              </div>
            </form>
          )}

          {/* section2  Electricity*/}
          {activeState === "section2" && (
            <form onSubmit={handleESave}>
              <div className="inside-form">
                <label>Facility: </label>
                <select
                  name="electricity"
                  value={selectFacilityChange}
                  onChange={handleFacilityChange}
                >
                  <option value="" disabled hidden>
                    Select Facility
                  </option>
                  <option value="Hostel">Hostel</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Health center">Health Center</option>
                  <option value="Schools">School</option>
                  <option value="University">University</option>
                  <option value="BankShop">Bank/Shop</option>
                  <option value="Others">Others</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Year: </label>
                <select
                  name="year"
                  value={selectYearChange}
                  onChange={handleYearChange}
                >
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Month: </label>
                <select
                  name="month"
                  value={selectMonthChange}
                  onChange={handleMonthChange}
                >
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Electricity Type: </label>
                <select
                  name="electricity type"
                  value={selectElectricityTypeChange}
                  onChange={handleElectricityTypeChange}
                >
                  <option value="" disabled hidden>
                    Select Electricity Type
                  </option>
                  <option value="coal">Coal/Thermal</option>
                  <option value="solar">Solar</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Unit: </label>
                <select
                  name="unit"
                  value={selectElectricityUnitChange}
                  onChange={handleElectricityUnitChange}
                >
                  <option value="" disabled hidden>
                    Select Unit
                  </option>
                  <option value="kwh">kwH</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Electricity Consumed: </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={electricityAmountConsumed}
                  onChange={handleElectricityAmountConsumed}
                />
                <br />
              </div>
              <div className="form-btn">
                <button type="submit">Save</button>
                <ToastContainer />
              </div>
            </form>
          )}

          {/* section3 Water*/}
          {activeState === "section3" && (
            <form onSubmit={handleWSave}>
              <div className="inside-form">
                <label>Facility: </label>
                <select
                  name="facility"
                  value={selectFacilityChange}
                  onChange={handleFacilityChange}
                >
                  <option value="" disabled hidden>
                    Select Facility
                  </option>
                  <option value="Hostel">Hostel</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Health center">Health Center</option>
                  <option value="Schools">School</option>
                  <option value="University">University</option>
                  <option value="BankShop">Bank/Shop</option>
                  <option value="Others">Others</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Year: </label>
                <select
                  name="year"
                  value={selectYearChange}
                  onChange={handleYearChange}
                >
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Month: </label>
                <select
                  name="month"
                  value={selectMonthChange}
                  onChange={handleMonthChange}
                >
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Water Type: </label>
                <select
                  name="water type"
                  value={selectWaterTypeChange}
                  onChange={handleWaterTypeChange}
                >
                  <option value="" disabled hidden>
                    Select Water Type
                  </option>
                  <option value="supplied">Supplied</option>
                  <option value="treated">Treated</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Water Discharge Site: </label>
                <select
                  name="water discharge site"
                  value={selectWaterDischargeSiteTypeChange}
                  onChange={handleWaterDischargeSiteTypeChange}
                >
                  <option value="" disabled hidden>
                    Select Water Discharge Site
                  </option>
                  <option value="domestic">Domestic</option>
                  <option value="industrial">Industrial</option>
                  <option value="agriculture">Agriculture</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Unit: </label>
                <select
                  name="unit"
                  value={selectWaterUnitChange}
                  onChange={handleWaterUnitChange}
                >
                  <option value="" disabled hidden>
                    Select Unit
                  </option>
                  <option value="cubicmeter">Cubic Meter</option>
                  <option value="litres">Litres</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Amount Consumed: </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={waterAmountConsumed}
                  onChange={handleWaterAmountConsumed}
                />
                <br />
              </div>
              <div className="form-btn">
                <button type="submit">Save</button>
                <ToastContainer />
              </div>
            </form>
          )}

          {/* section4 Travel */}
          {activeState === "section4" && (
            <form onSubmit={handleTSave}>
              <div className="inside-form">
                <label>Facility: </label>
                <select
                  name="facility"
                  value={selectFacilityChange}
                  onChange={handleFacilityChange}
                >
                  <option value="" disabled hidden>
                    Select Facility
                  </option>
                  <option value="Hostel">Hostel</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Health center">Health Center</option>
                  <option value="Schools">School</option>
                  <option value="University">University</option>
                  <option value="BankShop">Bank/Shop</option>
                  <option value="Others">Others</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Year: </label>
                <select
                  name="year"
                  value={selectYearChange}
                  onChange={handleYearChange}
                >
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Month: </label>
                <select
                  name="month"
                  value={selectMonthChange}
                  onChange={handleMonthChange}
                >
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Mode of Transport: </label>
                <select
                  name="mode of transport"
                  value={selectModeOfTransportChange}
                  onChange={handleModeOfTransportChange}
                >
                  <option value="" disabled hidden>
                    Select Mode of Transport
                  </option>
                  <option value="airways">Airways</option>
                  <option value="railways">Railways</option>
                  <option value="roadways">Roadways</option>
                </select>
                <br />
              </div>

              {selectModeOfTransportChange === "airways" && (
                <div className="inside-form">
                  <label>Flight Type: </label>
                  <select
                    name="airways"
                    value={SubOption}
                    onChange={handleSubOption}
                  >
                    <option value="" disabled hidden>
                      Select Flight Type
                    </option>
                    <option value="domestic">Domestic</option>
                    <option value="international">International</option>
                  </select>
                </div>
              )}
              {selectModeOfTransportChange === "railways" && (
                <div className="inside-form">
                  <label>Rail Type: </label>
                  <select
                    name="railways"
                    value={SubOption}
                    onChange={handleSubOption}
                  >
                    <option value="" disabled hidden>
                      Select Railways Type
                    </option>
                    <option value="nationalrail">National Railway</option>
                    <option value="metro">Metro</option>
                  </select>
                </div>
              )}
              {selectModeOfTransportChange === "roadways" && (
                <div className="inside-form">
                  <label>Vehicle Fuel: </label>
                  <select
                    name="Vehicle"
                    value={SubOption}
                    onChange={handleSubOption}
                  >
                    <option value="" disabled hidden>
                      Select Vehicle Fuel
                    </option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                  </select>
                </div>
              )}
              <div className="inside-form">
                <label>Distance Travelled: </label>
                <input
                  type="number"
                  placeholder="Enter Distance"
                  value={distanceTravelled}
                  onChange={handleDistanceTravelled}
                />
                <br />
              </div>
              <div className="form-btn">
                <button type="submit">Save</button>
                <ToastContainer />
              </div>
            </form>
          )}

          {/* section5 Waste*/}
          {activeState === "section5" && (
            <form onSubmit={handleWaSave}>
              <div className="inside-form">
                <label>Facility: </label>
                <select
                  name="facility"
                  value={selectFacilityChange}
                  onChange={handleFacilityChange}
                >
                  <option value="" disabled hidden>
                    Select Facility
                  </option>
                  <option value="Hostel">Hostel</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Health center">Health Center</option>
                  <option value="Schools">School</option>
                  <option value="University">University</option>
                  <option value="BankShop">Bank/Shop</option>
                  <option value="Others">Others</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Year: </label>
                <select
                  name="year"
                  value={selectYearChange}
                  onChange={handleYearChange}
                >
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Month: </label>
                <select
                  name="month"
                  value={selectMonthChange}
                  onChange={handleMonthChange}
                >
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Waste Type: </label>
                <select
                  name="waste type"
                  value={selectWasteTypeChange}
                  onChange={handleWasteTypeChange}
                >
                  <option value="" disabled hidden>
                    Select Waste Type
                  </option>
                  <option value="householdresidue">HouseHold Residue</option>
                  <option value="foodanddrinks">Food and Drinks</option>
                  <option value="gardenwaste">Garden Waste</option>
                  <option value="commercialorindustrialwaste">
                    Commercial or Industrial Waste
                  </option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Treatment Type: </label>
                <select
                  name="treatment type"
                  value={selectwasteTreatmentTypeChange}
                  onChange={handleWasteTreatmentType}
                >
                  <option value="" disabled hidden>
                    Select WasteTreatment Type
                  </option>
                  <option value="landfill">LandFill</option>
                  <option value="compaction">Compaction</option>
                  <option value="combustion">Combustion</option>
                  <option value="recycling">Recycling</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Unit: </label>
                <select
                  name="unit"
                  value={selectWasteUnitChange}
                  onChange={handleWasteUnitChange}
                >
                  <option value="" disabled hidden>
                    Select Unit
                  </option>
                  <option value="kg">kg</option>
                  <option value="tonne">tonne</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Amount Consumed: </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={wasteAmountConsumed}
                  onChange={handleWasteAmountConsumed}
                />
                <br />
              </div>
              <div className="form-btn">
                <button type="submit">Save</button>
                <ToastContainer />
              </div>
            </form>
          )}

          {/* section6 home*/}
          {activeState === "section6" && (
            <form onSubmit={handleHSave}>
              <div className="inside-form">
                <label>Facility: </label>
                <select
                  name="facility"
                  value={selectFacilityChange}
                  onChange={handleFacilityChange}
                >
                  <option value="" disabled hidden>
                    Select Facility
                  </option>
                  <option value="Hostel">Hostel</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Health center">Health Center</option>
                  <option value="Schools">School</option>
                  <option value="University">University</option>
                  <option value="BankShop">Bank/Shop</option>
                  <option value="Others">Others</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Year: </label>
                <select
                  name="year"
                  value={selectYearChange}
                  onChange={handleYearChange}
                >
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Month: </label>
                <select
                  name="month"
                  value={selectMonthChange}
                  onChange={handleMonthChange}
                >
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Application Type: </label>
                <select
                  name="application type"
                  value={selectApplicationTypeChange}
                  onChange={handleApplicationTypeChange}
                >
                  <option value="" disabled hidden>
                    Select Application Type
                  </option>
                  <option value="commercialRefrigeration">
                    Commercial Refrigeration
                  </option>
                  <option value="industrialRefrigeration">
                    Industrial Refrigeration
                  </option>
                  <option value="domesticRefrigeration">
                    Domestic Refrigeration
                  </option>
                  <option value="commercialACs">Commercial ACs</option>
                  <option value="industrailACs">Industrial ACs</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Number of Units Comsumed: </label>
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={homeUnitConsumed}
                  onChange={handleHomeUnitConsumed}
                />
                <br />
              </div>
              <div className="form-btn">
                <button type="submit">Save</button>
                <ToastContainer />
              </div>
            </form>
          )}

          {/* section7 Offset btn click then dislays results*/}
          {activeState === "section7" && (
            <form onSubmit={handleOSave}>
              <div className="inside-form">
                <label>Facility: </label>
                <select
                  name="facility"
                  value={selectFacilityChange}
                  onChange={handleFacilityChange}
                >
                  <option value="" disabled hidden>
                    Select Facility
                  </option>
                  <option value="Hostel">Hostel</option>
                  <option value="Residential Apartment">
                    Residential Apartment
                  </option>
                  <option value="Health center">Health Center</option>
                  <option value="Schools">School</option>
                  <option value="University">University</option>
                  <option value="BankShop">Bank/Shop</option>
                  <option value="Others">Others</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Year: </label>
                <select
                  name="year"
                  value={selectYearChange}
                  onChange={handleYearChange}
                >
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Month: </label>
                <select
                  name="month"
                  value={selectMonthChange}
                  onChange={handleMonthChange}
                >
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <br />
              </div>
              <div className="inside-form">
                <label>Number of Trees: </label>
                <input
                  type="number"
                  placeholder="Enter Number of Trees"
                  value={numberOfTrees}
                  onChange={handleNumberOfTrees}
                />
                <br />
              </div>
              <div className="inside-form">
                <label>Area Covered in Soil(m²): </label>
                <input
                  type="number"
                  placeholder="Enter Area"
                  value={areaCoveredInSoil}
                  onChange={handleAreaCoveredInSoil}
                />
                <br />
              </div>
              <div className="inside-form">
                <label>Area Covered in Grass(m²): </label>
                <input
                  type="number"
                  placeholder="Enter Area"
                  value={areaCoveredInGrass}
                  onChange={handleAreaCoveredInGrass}
                />
                <br />
              </div>
              <div className="inside-form">
                <label>Area Covered in Water(m²): </label>
                <input
                  type="number"
                  placeholder="Enter Area"
                  value={areaCoveredinWater}
                  onChange={handleAreaCoveredinWater}
                />
                <br />
              </div>
              <div className="form-btn">
                <button type="submit">Save</button>
                <ToastContainer />
                <button onClick={handleResult}>Show Result</button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
