import React from "react";
import {
  Container,
  ContentWrap,
  HomeButton,
  ImgWrap,
  PageTitle,
  TextWrap,
} from "./pageElements";
import img1 from "../../images/skrzydlo.png";
import img2 from "../../images/chem.png";
import Hero from "../hero/Hero";
import { useHistory } from "react-router-dom";

const Home = ({ page }) => {
  let history = useHistory();
  return (
    <>
      <Hero page={page} />
      <Container>
        <PageTitle>
          Czy wiesz, że przez twoje płuca przechodzi aż 11000 litrów powietrza
          dziennie?
        </PageTitle>
        <ContentWrap>
          <TextWrap>
            <p>
              Zaproś do miejsca, w którym żyjesz, rośliny doniczkowe filtrujące
              powietrze. Umieść je tam, gdzie śpisz, pracujesz i spędzasz czas
              wolny. Kwiaty oczyszczą pomieszczenia z niebezpiecznych toksyn, a
              także dostarczą niezbędny Twoim płucom tlen.
            </p>
          </TextWrap>
          <ImgWrap>
            <img src={img1} alt="skrzydłokwiat" />
          </ImgWrap>
        </ContentWrap>
        <ContentWrap photoFirst={true}>
          <TextWrap>
            <p>
              Dzięki nim ochronisz zdrowie własne oraz Twoich bliskich. A do
              tego zyskasz przepiękną dekorację mieszkania, domu lub miejsca
              pracy.
            </p>
          </TextWrap>
          <ImgWrap>
            <img src={img2} alt="chem" />
          </ImgWrap>
        </ContentWrap>
        <ContentWrap>
          <HomeButton onClick={() => history.push("/katalog")}>
            Sprawdź jakie rośliny są odpowiednie dla Twojego wnętrza
          </HomeButton>
        </ContentWrap>
      </Container>
    </>
  );
};

export default Home;
