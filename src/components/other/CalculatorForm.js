import React from "react";
import { Wrapper, Row, Button } from "./formElements";

const CalculatorForm = () => {
  return (
    <Wrapper>
      <Row>
        <p>1. Wybierz powierzchnie pomieszczenia*</p>
        <label>
          <input type="radio" name="pow" />
          1m-9m
        </label>
        <label>
          <input type="radio" name="pow" />
          10m-15m
        </label>
        <label>
          <input type="radio" name="pow" />
          16m-20m
        </label>
        <label>
          <input type="radio" name="pow" />
          21m-25m
        </label>
        <label>
          <input type="radio" name="pow" />
          30m i więcej
        </label>
      </Row>

      <Row>
        <p>2. Wybierz przeznaczenie pomieszczenia</p>
        <label>
          <input type="radio" name="wyb" />
          Pomieszczenie mieszkalne
        </label>
        <label>
          <input type="radio" name="wyb" />
          Pomieszczenie biurowe
        </label>
        <label>
          <input type="radio" name="wyb" />
          Pomieszczenie usługowe
        </label>
      </Row>
      <Button>Oblicz</Button>
    </Wrapper>
  );
};

export default CalculatorForm;
