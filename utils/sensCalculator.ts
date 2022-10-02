export const eDPI = (sensitivity: number, dpi: number) => {
  return sensitivity * dpi;
};

export const lowerSens = (sensitivity: number) => {
  return sensitivity * 0.5;
};

export const higherSens = (sensitivity: number) => {
  return sensitivity * 1.5;
};

export const averageSens = (sensitivity: number) => {
  return (lowerSens(sensitivity) + higherSens(sensitivity)) * 0.5;
};
