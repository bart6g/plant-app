import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;
  border-top: 4px solid #707070;
  margin-top: 50px;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 950px) {
    height: 140px;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  max-height: 50px;

  img {
    max-height: 50px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  margin-top: 10px;
  a {
    color: #262624;
    text-decoration: none;

    &:first-child {
      padding-right: 15px;
      border-right: 2px solid #262624;
    }
    &:nth-child(2) {
      padding-left: 15px;
    }
  }
`;

export const Rights = styled.div`
  position: absolute;
  right: 30px;
  bottom: 15px;

  @media screen and (max-width: 950px) {
    position: static;
  }
`;
