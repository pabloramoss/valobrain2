import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import styled from "styled-components";
const SearchbarContainer = styled.div`
  display: flex;
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

export const Searchbar: React.FC = () => {
  const [query, setQuery] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <SearchbarContainer>
      <img alt="valobrain logo searchbar" className="icon-searchbar" src="/valorant-icon.svg" />
      <div className="divider" />
      <input placeholder="Busca la micro strat" onChange={handleChange} />
      <FaSearch className="icon-searchbar" color="grey" size={25} />
    </SearchbarContainer>
  );
};
