import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  right: 50px;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  visibility: hidden;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    visibility: visible;
  }
`;

const Line = styled.div`
  width: 40px;
  height: 5px;
  background-color: white;
  border-radius: 20px;
  transition: all 0.3s ease;
  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(12.5px) rotate(45deg)" : ""};
  }
  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(-12.5px) rotate(-45deg)" : ""};
  }
`;
const Hamburger = ({ setIsOpen, isOpen }) => {
  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </Container>
  );
};

export default Hamburger;
