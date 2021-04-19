import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const ContactInfo = () => {
  return (
    <Container>
      <h3>FLO.pl</h3>
      <br />
      <p>E-mail: konktakt@flo.pl</p>
      <p>Tel.: +48 123 456 789</p>
      <p>Faks: +48 123 456 789</p>
      <br />
      <p>ul. Lorem ipsum 5</p>
      <p>12-345 Lorem</p>
    </Container>
  );
};

export default ContactInfo;
