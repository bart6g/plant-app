import React from "react";
import Hero from "../hero/Hero";
import {
  Container,
  PageTitle,
  TitleWrapper,
  PageLinks,
  PageSubtitle,
} from "./pageElements";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ContactInfo from "../other/ContactInfo";
import ContactForm from "../other/ContactForm";
const Contact = ({ page }) => {
  return (
    <div>
      <Hero page={page} />
      <TitleWrapper>
        <PageLinks>
          <div className="link">
            <IoIosArrowBack />
            <NavLink to="/">strona głowna</NavLink>
          </div>
          <div className="link">
            <IoIosArrowBack />
            <h3>kontakt</h3>
          </div>
        </PageLinks>
        <PageTitle>Kontakt </PageTitle>
        <PageSubtitle>
          Page was designed by Anna Bobek & written by Bartosz Gałuszka (using
          React).
        </PageSubtitle>
      </TitleWrapper>
      <Container>
        <ContactInfo />
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
