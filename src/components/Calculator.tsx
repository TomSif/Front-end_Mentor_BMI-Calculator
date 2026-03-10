import { useState } from "react";

function Calculator() {
  const [unity, setUnity] = useState<"metric" | "imperial">("metric");
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);

  function calculateBMI() {
    if (weight && height) {
      return weight / ((height / 100) * (height / 100));
    } else return null;
  }
  const bmi = calculateBMI();

  function getBMICategory(bmi: number) {
    let category = "";
    if (bmi) {
      if (bmi < 18.5) category = "Underweight";
      if (bmi >= 18.5 && bmi < 24.9) category = "Healthy weight";
      if (bmi >= 25 && bmi < 29.9) category = "Overweight";
      if (bmi >= 30) category = "Obese";
      return category;
    } else {
      return "";
    }
  }
  return (
    <div className="bg-grey-500 w-54 h-54">
      <form>
        <fieldset>
          <legend>Enter your details below</legend>
          <div className="flex ">
            <label htmlFor="metric">Metric</label>
            <input
              checked={unity === "metric"}
              type="radio"
              id="metric"
              name="unity"
              value="metric"
              onChange={() => {
                setUnity("metric");
              }}
            />
            <label htmlFor="imperial">Imperial</label>
            <input
              checked={unity === "imperial"}
              type="radio"
              id="imperial"
              name="unity"
              value="imperial"
              onChange={() => {
                setUnity("imperial");
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="height">Height</label>
            <input
              type="number"
              min="0"
              max="300"
              id="height"
              name="height"
              value={height ?? ""}
              onChange={(e) => {
                setHeight(Number(e.target.value));
              }}
            />
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              min="0"
              max="300"
              id="weight"
              name="weight"
              value={weight ?? ""}
              onChange={(e) => {
                setWeight(Number(e.target.value));
              }}
            />
          </div>
        </fieldset>
        <p>{bmi ? bmi.toFixed(2) : ""}</p>
        <p>{bmi ? getBMICategory(bmi) : ""}</p>
      </form>
    </div>
  );
}

export default Calculator;
