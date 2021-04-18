import React from "react";
import {
  FooterContainer,
  FooterLinks,
  FooterWrapper,
  Logo,
  Rights,
} from "./footerElements";
import { NavLink as FooterLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>
          <img src={logo} alt="" />
        </Logo>

        <FooterLinks>
          <FooterLink to="/">Strona Główna</FooterLink>
          <FooterLink to="/">Polityka Prywatności</FooterLink>
        </FooterLinks>
        <Rights>All rights reserved - FLO.pl 2020</Rights>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
