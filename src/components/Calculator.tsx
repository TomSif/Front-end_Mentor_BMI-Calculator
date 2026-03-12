import { useState } from "react";

function Calculator() {
  const [unity, setUnity] = useState<"metric" | "imperial">("metric");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [feet, setFeet] = useState<number>(0);
  const [inches, setInches] = useState<number>(0);
  const [stones, setStones] = useState<number>(0);
  const [lbs, setLbs] = useState<number>(0);

  function resetStates() {
    setHeight(0);
    setWeight(0);
    setFeet(0);
    setInches(0);
    setStones(0);
    setLbs(0);
  }

  function convertToMetric(
    feet: number,
    inches: number,
    stones: number,
    lbs: number,
  ) {
    const h = feet * 30.48 + inches * 2.54;
    const w = stones * 6.35 + lbs * 0.453;
    return { height: h, weight: w };
  }

  function calculateBMI() {
    if (unity === "metric") {
      if (weight > 0 && height > 0) {
        return weight / ((height / 100) * (height / 100));
      } else return 0;
    } else {
      if (feet > 0 && stones > 0) {
        const { height: h, weight: w } = convertToMetric(
          feet,
          inches,
          stones,
          lbs,
        );
        return w / ((h / 100) * (h / 100));
      } else return 0;
    }
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

  function getHealthyWeightRange(height: number) {
    const min = 18.5 * ((height / 100) * (height / 100));
    const max = 24.9 * ((height / 100) * (height / 100));

    return { min, max };
  }
  const range = height > 0 ? getHealthyWeightRange(height) : null;

  return (
    <div className="bg-white w-full rounded-2xl z-10 flex flex-col px-8 py-8 gap-8 lg:max-w-141">
      <form>
        <fieldset className="grid grid-cols-2 gap-8">
          <legend className="text-preset-4 text-blue-900 col-span-2">
            Enter your details below
          </legend>
          <div className="flex items-center gap-3 col-start-1 row-start-1">
            <input
              className="col-start-1"
              checked={unity === "metric"}
              type="radio"
              id="metric"
              name="unity"
              value="metric"
              onChange={() => {
                setUnity("metric");
                resetStates();
              }}
            />
            <label
              className="text-preset-6-bold text-blue-900 col-start-1"
              htmlFor="metric"
            >
              Metric
            </label>
          </div>
          <div className="flex items-center gap-3 col-start-2 row-start-1">
            <input
              className="col-start-2"
              checked={unity === "imperial"}
              type="radio"
              id="imperial"
              name="unity"
              value="imperial"
              onChange={() => {
                setUnity("imperial");
                resetStates();
              }}
            />
            <label
              className="text-preset-6-bold text-blue-900 col-start-2"
              htmlFor="imperial"
            >
              Imperial
            </label>
          </div>
          {unity === "metric" ? (
            <div className="col-span-2 grid cols-2 gap-8 w-full">
              <div className="flex flex-col w-full col-start-1">
                <label htmlFor="height">Height</label>
                <input
                  className="bg-white"
                  type="number"
                  min="0"
                  max="300"
                  id="height"
                  name="height"
                  value={height}
                  onChange={(e) => {
                    setHeight(Number(e.target.value));
                  }}
                  onFocus={(e) => e.target.select()}
                />
              </div>
              <div className="flex flex-col w-full col-start-2">
                <label htmlFor="weight">Weight</label>
                <input
                  className="bg-white"
                  type="number"
                  min="0"
                  max="300"
                  id="weight"
                  name="weight"
                  value={weight}
                  onChange={(e) => {
                    setWeight(Number(e.target.value));
                  }}
                  onFocus={(e) => e.target.select()}
                />
              </div>
            </div>
          ) : (
            <div className="col-span-2 grid cols-2  w-full">
              <label className="col-span-2" htmlFor="feet">
                Height
              </label>
              <div className="col-span-2 grid cols-2 gap-8 w-full">
                <input
                  className="col-start-1"
                  type="number"
                  min="0"
                  max="300"
                  id="feet"
                  name="feet"
                  value={feet}
                  onChange={(e) => {
                    setFeet(Number(e.target.value));
                  }}
                  onFocus={(e) => e.target.select()}
                />
                <input
                  className="col-start-2"
                  type="number"
                  min="0"
                  max="300"
                  id="inches"
                  name="inches"
                  value={inches}
                  onChange={(e) => {
                    setInches(Number(e.target.value));
                  }}
                  onFocus={(e) => e.target.select()}
                />
              </div>
              <div className="col-span-2 grid cols-2  w-full">
                <label className="col-span-2" htmlFor="stones">
                  Weight
                </label>
                <div className="col-span-2 grid cols-2 gap-8 w-full">
                  <input
                    className="col-start-1"
                    type="number"
                    min="0"
                    max="300"
                    id="stones"
                    name="stones"
                    value={stones}
                    onChange={(e) => {
                      setStones(Number(e.target.value));
                    }}
                    onFocus={(e) => e.target.select()}
                  />
                  <input
                    className="col-start-2"
                    type="number"
                    min="0"
                    max="300"
                    id="lbs"
                    name="lbs"
                    value={lbs}
                    onChange={(e) => {
                      setLbs(Number(e.target.value));
                    }}
                    onFocus={(e) => e.target.select()}
                  />
                </div>
              </div>
            </div>
          )}
        </fieldset>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p>{bmi ? bmi.toFixed(2) : ""}</p>
            <p>{bmi ? getBMICategory(bmi) : ""}</p>
          </div>
          <div>
            <p>
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between
              <strong>
                {range?.min.toFixed(1)} kgs - {range?.max.toFixed(1)} kgs
              </strong>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
