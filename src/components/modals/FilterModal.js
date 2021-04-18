import React from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { keyframes, css } from "styled-components";

const onLoad = keyframes`
    0%{
        clip-path: circle(100px at 90% -20%);
    }

    100%{
        clip-path: circle(1050px);  
    }
`;

const onClose = keyframes`
    0%{
        clip-path: circle(1050px);  
    }
    100%{
        clip-path: circle(100px at 90% -20%);
    }
`;
const Container = styled.div`
  position: absolute;
  top: 80px;
  height: 500px;
  width: 300px;
  background-color: black;
  z-index: 5;
  opacity: 0.9;
  color: white;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  clip-path: ${({ isOpen }) =>
    isOpen
      ? "clip-path: circle(1050px)"
      : " clip-path: circle(100px at 90% -20%)"};
  animation: ${({ isOpen }) =>
      isOpen
        ? css`
            ${onLoad}
          `
        : css`
            ${onClose}
          `}
    1s;
  transition: all 1s ease;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  svg {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  }

  button {
    position: absolute;
    bottom: 30px;
    padding: 10px 30px;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
      opacity: 0.8;
    }
  }
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
  margin-bottom: 20px;
  p {
    margin-bottom: 5px;
  }
  input {
    margin-right: 10px;
    cursor: pointer;
  }
  label {
    cursor: pointer;
  }
`;
const FilterModal = ({ close, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <ImCross onClick={() => close(false)} />

      <Group>
        <p>Stopień filtracji powietrza</p>
        <label>
          <input type="checkbox" name="1" id="" />
          niski
        </label>
        <label>
          <input type="checkbox" name="1" id="" />
          średni
        </label>
        <label>
          <input type="checkbox" name="1" id="" />
          wysoki
        </label>
      </Group>
      <Group>
        <p>Potrzeba nasłonecznienia</p>
        <label>
          <input type="checkbox" name="1" id="" />
          niska
        </label>
        <label>
          <input type="checkbox" name="1" id="" />
          średnia
        </label>
        <label>
          <input type="checkbox" name="1" id="" />
          wysoka
        </label>
      </Group>
      <Group>
        <p>Poziom trudności</p>
        <label>
          <input type="checkbox" name="1" id="" />
          niski
        </label>
        <label>
          <input type="checkbox" name="1" id="" />
          średni
        </label>
        <label>
          <input type="checkbox" name="1" id="" />
          wysoki
        </label>
      </Group>
      <button>filtruj</button>
    </Container>
  );
};

export default FilterModal;
