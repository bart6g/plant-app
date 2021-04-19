import React, { useState } from "react";
import Hero from "../hero/Hero";
import {
  Container,
  CatalogWrapper,
  PageTitle,
  PageSubtitle,
  TitleWrapper,
  PageLinks,
  Filter,
} from "./pageElements";
import { catalogData } from "../../data/catalogData";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import FilterModal from "../modals/FilterModal";
import PlantBox from "../other/PlantBox";
const Catalog = ({ page, setPage }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
            <h3>rośliny filtrujące</h3>
          </div>
        </PageLinks>
        <PageTitle>Rośliny filtrujące powietrze </PageTitle>
        <PageSubtitle>
          według badań przeprowadzonych przez NASA - poprawiają jakość powietrza
          i niwelują takie dolegliwości jak bóle i zawroty głowy czy
          podrażnienie błon śluzowych.
        </PageSubtitle>
        <div style={{ position: "relative" }}>
          <Filter
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            isFilterOpen={isFilterOpen}
          >
            <IoIosArrowDown /> pokaż filtry wyszukiwania
          </Filter>

          <FilterModal close={setIsFilterOpen} isOpen={isFilterOpen} />
        </div>
      </TitleWrapper>
      <Container>
        {/* <button onClick={() => console.log(plants)}>catalog</button>
        <Catalog>{plants}</Catalog> */}
        <CatalogWrapper>
          {catalogData.map((plant) => (
            <PlantBox key={plant.title} setPage={setPage} title={plant.title}>
              <img src={plant.img} alt="" />
              <div>{plant.title}</div>
            </PlantBox>
          ))}
        </CatalogWrapper>
      </Container>
    </div>
  );
};

export default Catalog;
