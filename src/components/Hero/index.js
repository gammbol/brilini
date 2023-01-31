import { motion } from "framer-motion";
import React from "react";
import Heroimg from "../../images/hero.png";
import {
  HeroContainer,
  HeroContentWrapper,
  HeroExploreLink,
  HeroExploreLinkContainer,
  HeroHeading,
  HeroHeadingContainer,
  HeroHeadingItalic,
  HeroHeadingMargin,
  HeroSubtitle,
  HeroSubtitleContainer,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer style={{ backgroundImage: `url(${Heroimg})` }}>
      <HeroContentWrapper>
        <HeroHeadingContainer>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <HeroHeadingItalic>We create</HeroHeadingItalic>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8 }}
          >
            <HeroHeading>interiors that one</HeroHeading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <HeroHeadingMargin>wants to live in</HeroHeadingMargin>
          </motion.div>
        </HeroHeadingContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <HeroSubtitleContainer>
            <HeroSubtitle>
              For more than 30 years, we've been bringing projects to life
              around the world.
            </HeroSubtitle>
            <HeroExploreLinkContainer className="arrow-up-right">
              <HeroExploreLink>Explore our work</HeroExploreLink>
            </HeroExploreLinkContainer>
          </HeroSubtitleContainer>
        </motion.div>
      </HeroContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
