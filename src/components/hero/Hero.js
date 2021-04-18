import React, { useEffect, useState } from "react";
import { HeroBg, HeroContainer, HeroTitle } from "./heroElements";
import { heroData } from "../../data/heroData";
const Hero = ({ page }) => {
  const [title, setTitle] = useState(heroData[0].title);

  useEffect(() => {
    const index = heroData.findIndex((el) => el.id === page);
    setTitle(heroData[index].title);
  }, [page]);
  return (
    <HeroContainer>
      <HeroBg>
        <HeroTitle>{title}</HeroTitle>
      </HeroBg>
    </HeroContainer>
  );
};

export default Hero;
