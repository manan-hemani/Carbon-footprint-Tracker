// after filling the form till last offset then create a function(sample is in fossilfuel savebtn) in which it will take all the values and then atlast will navigate it to result page
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useLocation, useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart, Tooltip, Legend, ArcElement } from "chart.js";

// chart.js mandatory 
Chart.register(Tooltip, Legend, ArcElement);

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  // converting the values in kg because c02 emission final results in kg
  const conversionFactors = {
    litre: {
      cng: 0.8,
      lpg: 0.54,
      petrol: 0.74,
      diesel: 0.84,
    },
    kg: {
      cng: 1,
      lpg: 1,
      petrol: 1,
      diesel: 1,
      tonne: 1000,
      kg: 1,
    },
    tonne: {
      cng: 1000,
      lpg: 1000,
      petrol: 1000,
      diesel: 1000,
      kg: 1000,
      tonne: 1,
    },
    kwh: {
      coal: 1,
      solar: 1,
    },
    litres: {
      supplied: {
        domestic: 1,
        industrial: 1,
        agriculture: 1,
      },
    },
    cubicmeter: {
      supplied: {
        domestic: 1000,
        industrial: 1000,
        agriculture: 1000,
      },
    },
  };

  // Fuel Calculation and Data
  const fuelData = {
    cng: { carbonContent: 0.75 },
    lpg: { carbonContent: 0.82 },
    petrol: { carbonContent: 0.87 },
    diesel: { carbonContent: 0.86 },
  };
  const { selectFuelTypeChange, amountConsumed, selectUnitChange } =
    location.state;

  const FuelCalculation = (fuelType, amountBurned, unit) => {
    const carbonContent = fuelData[fuelType].carbonContent;

    const conversionFactor = conversionFactors[unit][fuelType];

    const amountInKg = amountBurned * conversionFactor;

    const carbonOxidized = amountInKg * carbonContent;
    const co2Emissions = carbonOxidized * 3.67; // 1 kg of carbon produces 3.67 kg of CO₂
    return co2Emissions;
  };
  const calculatedFuelEmissions = FuelCalculation(
    selectFuelTypeChange,
    amountConsumed,
    selectUnitChange
  );

  // // Electricity Calculation and Data
  const electricityData = {
    coal: { carbonContent: 0.91 },
    solar: { carbonContent: 0.0 },
  };
  const {
    selectElectricityTypeChange,
    electricityAmountConsumed,
    selectElectricityUnitChange,
  } = location.state;

  const ElectricityCalculation = (electricityType, amountConsumed, unit) => {
    const carbonContent = electricityData[electricityType].carbonContent;
    const conversionFactor = conversionFactors[unit][electricityType];

    const amountInKg = amountConsumed * conversionFactor;

    const carbonOxidized = amountInKg * carbonContent;
    const co2Emissions = carbonOxidized * 3.67; // 1 kg of carbon produces 3.67 kg of CO₂
    return co2Emissions;
  };

  const calculatedElectricityEmissions = ElectricityCalculation(
    selectElectricityTypeChange,
    electricityAmountConsumed,
    selectElectricityUnitChange
  );

  // Travel Calculation and Data
  const travelData = {
    airways: {
      domestic: { carbonContent: 0.15 }, // kg CO2 per km
      international: { carbonContent: 0.25 }, // kg CO2 per km
    },
    railways: {
      nationalrail: { carbonContent: 0.035 }, // kg CO2 per km
      metro: { carbonContent: 0.028 }, // kg CO2 per km
    },
    roadways: {
      petrol: { carbonContent: 0.17 }, // kg CO2 per km
      diesel: { carbonContent: 0.171 }, // kg CO2 per km
      electric: { carbonContent: 0.047 }, // kg CO2 per km
    },
  };
  const { selectModeOfTransportChange, distanceTravelled, SubOption } =
    location.state;

  const TravelCalculation = (MOD, distance, subOption) => {
    const carbonContent = travelData[MOD][subOption].carbonContent;
    const carbonOxidized = distance * carbonContent;
    const co2Emissions = carbonOxidized * 3.67; // 1 kg of carbon produces 3.67 kg of CO₂
    return co2Emissions;
  };

  const calculatedTravelEmissions = TravelCalculation(
    selectModeOfTransportChange,
    distanceTravelled,
    SubOption
  );

  //Water Calculation and Data
  const waterData = {
    supplied: { carbonContent: 0.5 },
    treated: { carbonContent: 2.0 },

    domestic: { carbonAdditionalContent: 0 },
    industrial: { carbonAdditionalContent: 0.2 },
    agriculture: { carbonAdditionalContent: 0.4 },
  };
  const {
    selectWaterTypeChange,
    selectWaterDischargeSiteTypeChange,
    selectWaterUnitChange,
    waterAmountConsumed,
  } = location.state;

  const WaterCalculation = (waterType, dischargeType, unit, amountConsumed) => {
    const carbonContent = waterData[waterType].carbonContent;
    const carbonAdditionalContent =
      waterData[dischargeType].carbonAdditionalContent;

    const conversionFactor = conversionFactors[unit][waterType][dischargeType];

    const amountInKg = amountConsumed * conversionFactor;

    const carbonOxidized =
      amountInKg * (carbonContent + carbonAdditionalContent);
    const co2Emissions = carbonOxidized * 3.67; // 1 kg of carbon produces 3.67 kg of CO₂
    return co2Emissions;
  };

  const calculatedWaterEmissions = WaterCalculation(
    selectWaterTypeChange,
    selectWaterDischargeSiteTypeChange,
    selectWaterUnitChange,
    waterAmountConsumed
  );

  // Waste Calculation and Data
  const wasteData = {
    householdresidue: {
      landfill: { carbonContent: 0.8 }, // kg CO2 per kg of waste
      compaction: { carbonContent: 0.6 },
      combustion: { carbonContent: 1.0 },
      recycling: { carbonContent: 0.1 },
    },
    foodanddrinks: {
      landfill: { carbonContent: 0.9 },
      compaction: { carbonContent: 0.7 },
      combustion: { carbonContent: 1.1 },
      recycling: { carbonContent: 0.2 },
    },
    commercialorindustrialwaste: {
      landfill: { carbonContent: 1.0 },
      compaction: { carbonContent: 0.8 },
      combustion: { carbonContent: 1.2 },
      recycling: { carbonContent: 0.3 },
    },
    gardenwaste: {
      landfill: { carbonContent: 0.6 },
      compaction: { carbonContent: 0.5 },
      combustion: { carbonContent: 0.8 },
      recycling: { carbonContent: 0.1 },
    },
  };
  const {
    selectWasteTypeChange,
    selectwasteTreatmentTypeChange,
    selectWasteUnitChange,
    wasteAmountConsumed,
  } = location.state;
  const WasteCalculation = (wasteType, treatmentType, unit, amountConsumed) => {
    const carbonContent = wasteData[wasteType][treatmentType].carbonContent;

    const conversionFactor = conversionFactors[unit][unit];

    const amountInKg = amountConsumed * conversionFactor;

    const carbonOxidized = amountInKg * carbonContent;
    const co2Emissions = carbonOxidized * 3.67; // 1 kg of carbon produces 3.67 kg of CO₂
    return co2Emissions;
  };

  const calculatedWasteEmissions = WasteCalculation(
    selectWasteTypeChange,
    selectwasteTreatmentTypeChange,
    selectWasteUnitChange,
    wasteAmountConsumed
  );

  // Home Calculation and Data
  const homeData = {
    commercialRefrigeration: { carbonContent: 0.15 },
    industrialRefrigeration: { carbonContent: 0.25 },
    domesticRefrigeration: { carbonContent: 0.2 },
    commercialACs: { carbonContent: 0.22 },
    industrailACs: { carbonContent: 0.28 },
  };
  const HomeCalculation = (type, amountConsumed) => {
    const carbonContent = homeData[type].carbonContent;

    const carbonOxidized = amountConsumed * carbonContent;
    const co2Emissions = carbonOxidized * 3.67; // 1 kg of carbon produces 3.67 kg of CO₂
    return co2Emissions;
  };
  const { selectApplicationTypeChange, homeUnitConsumed } = location.state;
  const calculatedHomeEmissions = HomeCalculation(
    selectApplicationTypeChange,
    homeUnitConsumed
  );

  // Offset Calculation and Data
  const OffsetCalculation = (tree, amountSoil, amountGrass, amountWater) => {
    const carbonContentTree = 1.83;
    const carbonContentWater = 0.75;
    const carbonContentGrass = 1.5;
    const carbonContentSoil = 1.0;

    //  1 tree absorbs 1.83kg co2 and 1m2 area absorbs 1.0,1.5,0.75 co2 respectively
    const carbonContent =
      carbonContentTree * tree +
      carbonContentSoil * amountSoil +
      carbonContentGrass * amountGrass +
      carbonContentWater * amountWater;
    const carbonAbsorbs = carbonContent;

    return carbonAbsorbs;
  };
  const {
    numberOfTrees,
    areaCoveredInSoil,
    areaCoveredInGrass,
    areaCoveredinWater,
  } = location.state;
  const calculatedOffsetEmissions = OffsetCalculation(
    numberOfTrees,
    areaCoveredInSoil,
    areaCoveredInGrass,
    areaCoveredinWater
  );

  // Total Co2 emission without Offset
  const TotalCo2Emission =
    calculatedFuelEmissions +
    calculatedElectricityEmissions +
    calculatedWaterEmissions +
    calculatedTravelEmissions +
    calculatedWasteEmissions +
    calculatedHomeEmissions;
  
  // Total Co2 emission with Offset Value
  const NetCo2Emission =
    calculatedFuelEmissions +
    calculatedElectricityEmissions +
    calculatedWaterEmissions +
    calculatedTravelEmissions +
    calculatedWasteEmissions +
    calculatedHomeEmissions -
    calculatedOffsetEmissions;

  // Pie Chart

  // Based on Year Chosen will display the following Pie Chart
  const { selectYearChange } = location.state;
  const PieChartData2022 = {
    labels: ["Fossi Fuels", "Electricity", "Travel", "Water", "Waste", "Home"],
    datasets: [
      {
        label: "Co2 Emission in 2022 India",
        data: [65, 20, 10, 2, 2, 1],
        backgroundColor: [
          "rgba(255,99,132)",
          "rgba(155,99,132)",
          "rgba(55,99,132)",
          "rgba(0,99,132)",
          "rgba(0,0,132)",
          "rgba(0,255,255)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const PieChartData2023 = {
    labels: ["Fossi Fuels", "Electricity", "Travel", "Water", "Waste", "Home"],
    datasets: [
      {
        label: "Co2 Emission in 2023 India",
        data: [63, 22, 11, 2, 1.5, 0.5],
        backgroundColor: [
          "rgba(255,99,132)",
          "rgba(155,99,132)",
          "rgba(55,99,132)",
          "rgba(0,99,132)",
          "rgba(0,0,132)",
          "rgba(0,255,255)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Pie Chart options and data arrays
  const options = {
    responsivness: true,
    maintainAspectRatio: false,
  };
  const PieChartData = {
    labels: ["Fossi Fuels", "Electricity", "Travel", "Water", "Waste", "Home"], // pie portion names
    // pie portion data
    datasets: [
      {
        label: "Co2 Emissions",
        data: [
          calculatedFuelEmissions,
          calculatedElectricityEmissions,
          calculatedTravelEmissions,
          calculatedWaterEmissions,
          calculatedWasteEmissions,
          calculatedHomeEmissions,
        ],
        backgroundColor: [
          "rgba(255,99,132)",
          "rgba(155,99,132)",
          "rgba(55,99,132)",
          "rgba(0,99,132)",
          "rgba(0,0,132)",
          "rgba(0,255,255)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // btn click to navigate to ways to reduce page
  const handleClick = () => {
    navigate("/reduce.jsx");
  };
  return (
    <>
      <Navbar />
      <div className="result">
        <h1>Results</h1>
        <h2>
          Total Carbon Emission :{" "}
          {<b> {parseFloat(TotalCo2Emission).toFixed(2)}</b>}kg of Co2
        </h2>
        <h2>
          Total Carbon Emission Absorbed by Offset :{" "}
          {<b>{parseFloat(calculatedOffsetEmissions).toFixed(2)}</b>}kg of Co2
        </h2>
        <h2>
          Net Carbon Footprint :{" "}
          {<b>{parseFloat(NetCo2Emission).toFixed(2)}</b>}
          kg of Co2
        </h2>
        <div className="graph">
          <div className="pieChart">
            {/* used div beacuse of bug height increasing indefinetly💀💀 */}
            <div className="pieChartInputed">
              <h3>Your Co2 Emission</h3>
              <Pie options={options} data={PieChartData} />
            </div>
            <div className="pieChartCreated">
              {selectYearChange == "2022" ? (
                <>
                  <h3>Co2 Emission in India {selectYearChange}</h3>
                  <Pie options={options} data={PieChartData2022} />
                </>
              ) : (
                <>
                  <h3>Co2 Emission in India {selectYearChange}</h3>
                  <Pie options={options} data={PieChartData2023} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="reduce-btn">
          <button onClick={handleClick}>Ways To Reduce</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Result;
