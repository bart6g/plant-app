import React, { useState } from "react";
import { Logo, NavContainer, NavLinks, NavWrapper } from "./navbarElements";
import logoImg from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navbar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavContainer>
      <NavWrapper>
        <Logo>
          <NavLink to="/" exact onClick={() => setPage(0)}>
            <img src={logoImg} alt="logo" />
          </NavLink>
        </Logo>

        <NavLinks isOpen={isOpen}>
          <li>
            <NavLink to="/katalog" onClick={() => setPage(1)}>
              Rośliny filtrujące
            </NavLink>
          </li>
          <li>
            <NavLink to="/kalkulator" onClick={() => setPage(2)}>
              Kalkulator filtracji
            </NavLink>
          </li>
          <li>
            <NavLink to="/sklep" onClick={() => setPage(3)}>
              Sklep
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" onClick={() => setPage(4)}>
              Kontakt
            </NavLink>
          </li>
        </NavLinks>
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
