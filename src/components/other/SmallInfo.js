import React from "react";
import { BsDropletFill } from "react-icons/bs";
import { BiWind } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Container, Rows, Row, Button, Square } from "./infoElements";

const SmallInfo = () => {
  let history = useHistory();
  return (
    <Container>
      <Rows>
        <Row>
          <BiWind />
          <p>
            Oczyszczanie <span>powietrza</span>
          </p>
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
      </Rows>
      <Button onClick={() => history.push("/kalkulator")}>
        Przejdź do kalkulatora
      </Button>
    </Container>
  );
};

export default SmallInfo;
