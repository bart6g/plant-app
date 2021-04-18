import styled, { keyframes } from "styled-components";
import bg from "../../images/bg.png";

const onLoad = keyframes`
  0% {
    transform: translateX(-100%)
  } 
  100% {
    transform: translateX(0)
  }
`;
export const HeroContainer = styled.div`
  height: 800px;
  background-image: url(${bg});
  /* margin-top: -22px; */
  background-position: bottom;
  background-size: cover;
  animation: ${onLoad} 2s;
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 15px;
  padding: 0 20px;
`;
