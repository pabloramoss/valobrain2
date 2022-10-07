const maps = ["Ascent", "Bind", "Breeze", "Fracture", "Haven", "Icebox", "Pearl", "Split"];

export const Maps: React.FC = () => {
  return (
    <div style={{display: "flex", gap: "8px"}}>
      {maps.map((item) => (
        <div key={item} style={{overflow: "hidden"}}>
          <img src="https://via.placeholder.com/100x50" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};
