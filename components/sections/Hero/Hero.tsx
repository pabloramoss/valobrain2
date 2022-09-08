import {FaSearch} from "react-icons/fa";
import styled from "styled-components";

const SearchbarContainer = styled.div`
  display: flex;
  max-width: 600px;
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
    height: 100%;
  }

  .icon-searchbar {
    margin: 0 30px;
  }
`;

export const Hero: React.FC = () => {
  return (
    <div>
      <h1>VALOBRAIN</h1>
      <h6>Micro strats for Valorant</h6>
      <SearchbarContainer>
        <img alt="valobrain logo searchbar" className="icon-searchbar" src="valorant-icon.svg" />
        <div className="divider" />
        <input placeholder="Busca la micro strat" />
        <FaSearch className="icon-searchbar" color="grey" size={25} />
      </SearchbarContainer>
      {`<Searchbar />`}
    </div>
  );
};

//::placeholder {
//   color: blue;
//   font-size: 1.5em;
// }
