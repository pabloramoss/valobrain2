import {NextPage} from "next";
import React, {useEffect, useState} from "react";

import {Iteration} from "../components/SensCalculator";

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

  const handleChangeSens = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartingSens(event.target.value as unknown as number);
  };
  const handleChangeDpi = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartingDPI(event.target.value as unknown as number);
  };

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", gap: "8px"}}>
          <label>Starting sensitivity:</label>
          <input
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setStartingSens(parseInt(event.target.value) as unknown as number)
            }
          />
          <label>Starting DPI</label>
          <input
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setStartingDPI(parseInt(event.target.value) as unknown as number)
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
          <Iteration startingDpi={startingDPI} startingSens={startingSens} />
        </div>
      </div>
    </div>
  );
};

export default SensCalculator;
