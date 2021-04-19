import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

const Row = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 10px;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  input {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  width: 120px;
  height: 32px;
  background: transparent;
  border: 1px solid black;
  margin: 20px 0;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    opacity: 0.8;
  }
`;

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
