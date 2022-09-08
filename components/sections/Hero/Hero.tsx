import {FaSearch} from "react-icons/fa";
import styled from "styled-components";
import Image from "next/image";

const SearchbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 10px;
  padding: 10px 0;
  input {
    width: 100%;
    border: none;
    margin-left: 30px;
    &:focus {
      outline: none;
      border: none;
    }
    &::placeholder {
      font-weight: 600;
    }
  }
  .divider {
    border-left: 1px solid #f7f7f7;
    height: 30px;
  }

  .icon-searchbar {
    margin: 0 30px;
  }
`;

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
      <SearchbarContainer>
        <img alt="valobrain logo searchbar" className="icon-searchbar" src="/valorant-icon.svg" />
        <div className="divider" />
        <input placeholder="Busca la micro strat" />
        <FaSearch className="icon-searchbar" color="grey" size={25} />
      </SearchbarContainer>
      {`<Searchbar />`}
    </div>
  );
};
