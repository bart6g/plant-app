import React from "react";
import Hero from "../hero/Hero";
import {
  PageTitle,
  PageSubtitle,
  TitleWrapper,
  PageLinks,
} from "./pageElements";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import CalculatorForm from "../other/CalculatorForm";

const Calculator = ({ page }) => {
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
            <h3>kalkulator filtracji</h3>
          </div>
        </PageLinks>
        <PageTitle>Kalkulator filtracji powietrza </PageTitle>
        <PageSubtitle>
          Kalkulator ten pozwala na samodzielne, łatwe i wygodne obliczenie
          zapotrzebowania na wydajność oczyszczania powietrza dla danego
          pomieszczenia w zależności od posiadanej rośliny.
          <br />
          <br />
          Narzędzie to pozwoli Ci określić ile roślin danego rodzaju
          potrzebujesz w pomieszczeniu aby powietrze w nim było w pełni
          oczyszczone.
        </PageSubtitle>
      </TitleWrapper>
      <CalculatorForm />
    </div>
  );
};

export default Calculator;
