export const Maps: React.FC = () => {
  const maps = ["Ascent", "Bind", "Breeze", "Fracture", "Haven", "Icebox", "Pearl", "Split"];

  return (
    <div>
      {maps.map((item) => (
        <div key={item} style={{borderRadius: "10px", overflow: "hidden", display: "grid"}}>
          <img src="https://via.placeholder.com/100x50" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};
