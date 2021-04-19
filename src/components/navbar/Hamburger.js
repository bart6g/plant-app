import React from "react";

import { Container, Line } from "./hamburgerElements";

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
