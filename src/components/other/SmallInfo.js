import React from "react";
import { BsDropletFill } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  align-items: center;

  margin: 5px 0;

  svg {
    font-size: 35px;
  }
  p {
    margin: 0 20px;
  }
`;

const Square = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${({ empty }) => (empty ? "transparent" : "#262624")};
  border: ${({ empty }) => (empty ? "1px solid #262624" : "none")};
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 15px 45px;
  font-size: 18px;
  border: 1px solid #262624;
  background: transparent;
  color: #262624;
  margin-top: 50px;
`;

const SmallInfo = () => {
  return (
    <div>
      <Row>
        <BiWind />
        <p>Oczyszczanie powietrza</p>
        <Square />
        <Square />
        <Square />
      </Row>
      <Row>
        <FaSun />
        <p>Nasłonecznienie</p>
        <Square />
        <Square />
        <Square empty={true} />
      </Row>
      <Row>
        <BsDropletFill />
        <p>Podlewanie</p>
        <Square />
        <Square />
        <Square empty={true} />
      </Row>

      <Button>Przejdź do kalkulatora</Button>
    </div>
  );
};

export default SmallInfo;
