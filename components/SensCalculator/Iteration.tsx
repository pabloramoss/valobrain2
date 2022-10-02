import {eDPI, lowerSens, higherSens, averageSens} from "../../utils/sensCalculator";

interface IterationProps {
  startingSens: number | null;
  startingDpi: number | null;
}

export const Iteration: React.FC<IterationProps> = ({startingSens, startingDpi}) => {
  if (startingSens === null || startingDpi === null) {
    return <>hola</>;
  }

  return (
    <div style={{display: "flex"}}>
      <p>23</p>
      <p>{lowerSens(startingSens)}</p>
      <p>{eDPI(lowerSens(startingSens), startingDpi)}</p>
      <select>
        <option>Higher</option>
        <option>Lower</option>
      </select>
      <p>{eDPI(higherSens(startingSens), startingDpi)}</p>
      <p>{higherSens(startingSens)}</p>
      <p>{averageSens(startingSens)}</p>
    </div>
  );
};
