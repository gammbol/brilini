import React from "react";
import Heroimg from "../../images/hero.png";
import {
  HeroContainer,
  HeroContentWrapper,
  HeroExploreLink,
  HeroExploreLinkContainer,
  HeroHeading,
  HeroSubtitle,
  HeroSubtitleContainer,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer style={{ backgroundImage: `url(${Heroimg})` }}>
      <HeroContentWrapper>
        <HeroHeading>
          We create interiors <br />
          that one <br />
          wants to live in
        </HeroHeading>
        <HeroSubtitleContainer>
          <HeroSubtitle>
            For more than 30 years, we've been bringing projects to life around
            the world.
          </HeroSubtitle>
          <HeroExploreLinkContainer>
            <HeroExploreLink>Explore our work</HeroExploreLink>
          </HeroExploreLinkContainer>
        </HeroSubtitleContainer>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
