import React from "react";
import Hero from "../hero/Hero";
import {
  Container,
  CatalogWrapper,
  PageTitle,
  PageSubtitle,
  TitleWrapper,
  PageLinks,
} from "./pageElements";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { catalogData } from "../../data/catalogData";
import PlantBox from "../other/PlantBox";
const Shop = ({ page, setPage }) => {
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
            <h3>sklep</h3>
          </div>
        </PageLinks>
        <PageTitle>Kup se roślinkę </PageTitle>
        <PageSubtitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod rem
          eveniet voluptas quos, quasi, aliquid magnam consectetur fugiat
          ducimus numquam consequuntur laborum porro, sit error sunt. Quisquam
          impedit sint eaque!
        </PageSubtitle>
      </TitleWrapper>
      <Container>
        {/* <button onClick={() => console.log(plants)}>catalog</button>
        <Catalog>{plants}</Catalog> */}
        <CatalogWrapper>
          {catalogData.map((plant) => (
            <PlantBox key={plant.title} setPage={setPage} title={plant.title}>
              <img src={plant.img} alt="" />
              <div>
                <p>{plant.title}</p>
                <h3>{Math.floor(Math.random() * 50 + 1)}$</h3>
              </div>
            </PlantBox>
          ))}
        </CatalogWrapper>
      </Container>
    </div>
  );
};

export default Shop;
