import React from "react";
import styled from "styled-components";
import { heroData } from "../../data/heroData";
import { catalogData } from "../../data/catalogData";
import { useHistory } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: translateY(-15px);
  }
  img {
    max-width: 300px;
    max-height: 300px;
    width: 100%;
  }
  p {
    padding: 20px 0;
  }
`;

const PlantBox = ({ setPage, title, children }) => {
  let history = useHistory();
  const handleClick = () => {
    const index = heroData.findIndex((el) => el.title === title);
    setPage(index);
    history.push(`/katalog/${title}`);
  };
  return <Box onClick={handleClick}>{children}</Box>;
};

export default PlantBox;
