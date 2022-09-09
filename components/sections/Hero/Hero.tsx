import styled from "styled-components";

import {Searchbar} from "./Searchbar";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
`;

export const Hero: React.FC = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <TitleContainer>
        <h1>VALOBRAIN</h1>
        <h4>Micro strats for Valorant</h4>
      </TitleContainer>
      <Searchbar />
    </div>
  );
};
