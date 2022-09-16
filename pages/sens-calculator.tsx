import {NextPage} from "next";
import React, {useState} from "react";

import {Navbar} from "../components/Navbar";

const lowerHigherSens = (averageSens: number) => {
  const higherSens = averageSens * 1.5;
  const lowerSens = averageSens * 0.5;

  return {
    higherSens,
    lowerSens,
  };
};

const SensCalculator: NextPage = () => {
  const [startingSens, setStartingSens] = useState<number | null>(null);
  const [startingDPI, setStartingDPI] = useState<number | null>(null);
  const [iterationObj, setIterationObj] = useState([
    {
      lower: {
        sens: null,
        eDPI: null,
      },
      higher: {
        sens: null,
        eDPI: null,
      },
      preference: null,
      average: null,
    },
  ]);

  return (
    <div>
      <Navbar />
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", gap: "8px"}}>
          <label>Starting sensitivity:</label>
          <input
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setStartingSens(event.target.value as unknown as number)
            }
          />
          <label>Starting DPI</label>
          <input
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setStartingDPI(event.target.value as unknown as number)
            }
          />
        </div>
        <div>
          <div style={{display: "flex", gap: "8px"}}>
            <p>Iteration #</p>
            <p>Lower [L]</p>
            <p>eDPI</p>
            <p>Preference</p>
            <p>eDPI</p>
            <p>Higher [H]</p>
            <p>Average</p>
          </div>
          <div style={{display: "flex"}}>
            <p>1</p>
            <p>{iterationObj[0].lower.sens}</p>
            <p>{iterationObj[0].lower.eDPI}</p>
            <p>{iterationObj[0].preference}</p>
            <p>{iterationObj[0].higher.eDPI}</p>
            <p>{iterationObj[0].higher.sens}</p>
            <p>{iterationObj[0].average}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensCalculator;
