import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../hero/Hero";
import { catalogData } from "../../data/catalogData";
import {
  Container,
  PageLinks,
  PageSubtitle,
  PageTitle,
  PlantImg,
  PlantWrapper,
  TitleWrapper,
} from "./pageElements";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import SmallInfo from "../other/SmallInfo";
const PlantPage = ({ page }) => {
  let { id } = useParams();

  let imgIndex = catalogData.findIndex((el) => el.id === id.toLowerCase());

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
            <NavLink to="/katalog">katalog roślin</NavLink>
          </div>
          <div className="link">
            <IoIosArrowBack />
            <h3>{id}</h3>
          </div>
        </PageLinks>
        <PageTitle>{id}</PageTitle>
        <PageSubtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur
          tempore quidem excepturi facere illo quaerat neque labore, soluta
          similique quam, possimus, ullam ipsam placeat. Magnam illum voluptate
          distinctio nobis aliquid aspernatur sed, officiis dicta saepe dolore
          sequi fuga omnis.
        </PageSubtitle>

        <Container>
          <PlantWrapper>
            <SmallInfo />
            <PlantImg>
              <img src={catalogData[imgIndex].img} alt="" />
            </PlantImg>
          </PlantWrapper>
        </Container>
      </TitleWrapper>
    </div>
  );
};

export default PlantPage;
