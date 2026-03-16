import { useState } from "react";
import InputField from "./InputField";

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
      if ((feet > 0 || inches > 0) && (stones > 0 || lbs > 0)) {
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
      if (bmi >= 18.5 && bmi < 25) category = "Healthy weight";
      if (bmi >= 25 && bmi < 30) category = "Overweight";
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
  const range =
    unity === "metric"
      ? getHealthyWeightRange(height)
      : getHealthyWeightRange(
          convertToMetric(feet, inches, stones, lbs).height,
        );

  function convertRangeToImperial(kg: number) {
    const st = Math.floor(kg / 6.35);
    const lb = Math.round((kg / 6.35 - st) * 14);
    return { st, lb };
  }

  return (
    <div className="bg-white w-full rounded-2xl z-10 flex flex-col px-8 py-8 gap-8 lg:max-w-141 box-shadow-1">
      <div className="flex flex-col w-full gap-8">
        <fieldset className="grid grid-cols-2 gap-8">
          <legend className="text-preset-4 text-blue-900 col-span-2 mb-8">
            Enter your details below
          </legend>
          <div className="flex items-center gap-4 col-start-1 row-start-1">
            <input
              className="col-start-1 appearance-none  h-8 w-8 checked:w-3.75 checked:h-3.75 transdiv checked:translate-x-2.25 checked:mr-4.25 hover:border-blue-500 rounded-full border
                      border-grey-500 checked:border-blue-500 checked:bg-blue-500 checked:ring-8 checked:ring-blue-200 "
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
          <div className="flex items-center gap-4 col-start-2 row-start-1">
            <input
              className="col-start-2 appearance-none  h-8 w-8 checked:w-3.75 checked:h-3.75 transform checked:translate-x-2.25 checked:mr-4.25 hover:border-blue-500 rounded-full border
                      border-grey-500 checked:border-blue-500 checked:bg-blue-500 checked:ring-8 checked:ring-blue-200"
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
            <div className="flex flex-col col-span-2 md:grid md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col w-full col-start-1">
                <label
                  className="text-grey-500 text-preset-7-regular mb-2"
                  htmlFor="height"
                >
                  Height
                </label>
                <InputField
                  name="height"
                  value={height}
                  unit="cm"
                  onChange={(e) => {
                    setHeight(Number(e.target.value));
                  }}
                />
              </div>
              <div className="flex flex-col w-full col-start-2">
                <label
                  className="text-grey-500 text-preset-7-regular mb-2"
                  htmlFor="weight"
                >
                  Weight
                </label>
                <InputField
                  name="weight"
                  value={weight}
                  unit="kg"
                  onChange={(e) => {
                    setWeight(Number(e.target.value));
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="col-span-2 grid grid-cols-2  w-full gap-4 lg:gap-8">
              <div className="col-span-2">
                <label
                  className="col-span-2 text-grey-500 text-preset-7-regular  "
                  htmlFor="feet"
                >
                  Height
                </label>
                <div className="col-span-2 grid grid-cols-2 gap-8 w-full mt-2">
                  <InputField
                    name="feet"
                    value={feet}
                    unit="ft"
                    onChange={(e) => {
                      setFeet(Number(e.target.value));
                    }}
                  />
                  <InputField
                    name="inches"
                    value={inches}
                    unit="in"
                    onChange={(e) => {
                      setInches(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="col-span-2 grid grid-cols-2  w-full">
                <label
                  className="col-span-2 text-grey-500 text-preset-7-regular mb-2 "
                  htmlFor="stones"
                >
                  Weight
                </label>
                <div className="col-span-2 grid grid-cols-2 gap-8 w-full">
                  <InputField
                    name="stones"
                    value={stones}
                    unit="st"
                    onChange={(e) => {
                      setStones(Number(e.target.value));
                    }}
                  />
                  <InputField
                    name="lbs"
                    value={lbs}
                    unit="lbs"
                    onChange={(e) => {
                      setLbs(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </fieldset>
        <div className="flex flex-col w-full p-8 bg-blue-500 text-white gap-8 rounded-3xl md:rounded-r-[10rem]">
          {bmi === 0 ? (
            <div className="flex flex-col w-full gap-4">
              <p className="text-preset-4">Welcome!</p>
              <p className="text-preset-7-regular">
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </div>
          ) : (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-col md:grid grid-cols-2 items-start md:items-center w-full gap-6"
            >
              <div className="flex flex-col col-start-1 text-white text-left">
                <p className="text-preset-6-regular mb-1">Your BMI is...</p>
                <p className="text-preset-2 lg:text-preset-1">
                  {bmi.toFixed(2)}
                </p>
              </div>
              <p className="text-preset-7-regular">
                Your BMI suggests you’re a {getBMICategory(bmi)}. Your ideal
                weight is between{" "}
                {unity === "metric" ? (
                  <strong className="text-preset-7-bold">
                    {range?.min.toFixed(1)} kgs - {range?.max.toFixed(1)} kgs
                  </strong>
                ) : (
                  <strong className="text-preset-7-bold">
                    {convertRangeToImperial(range.min).st}st{" "}
                    {convertRangeToImperial(range.min).lb}lbs{" - "}
                    {convertRangeToImperial(range.max).st}st{" "}
                    {convertRangeToImperial(range.max).lb}lbs
                  </strong>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
