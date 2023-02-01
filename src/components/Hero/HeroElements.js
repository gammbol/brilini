import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.7rem;
  margin-bottom: 79px;

  @media screen and (max-width: 425px) {
    padding: 0 0.9rem;
    margin-bottom: 30px;
  }
`;

export const HeroHeadingContainer = styled.h1`
  color: #fff;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-size: 6rem;
  font-style: normal;
  margin-bottom: 5rem;

  @media screen and (min-width: 2560px) {
    font-size: 8rem;
  }

  @media screen and (max-width: 1200px) {
    font-size: 4.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.3rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 6rem;
  }
`;

export const HeroHeading = styled(HeroHeadingContainer)`
  margin-bottom: 0;
`;

export const HeroHeadingItalic = styled(HeroHeadingContainer)`
  font-style: italic;
  margin-bottom: 0;
`;

export const HeroHeadingMargin = styled(HeroHeadingContainer)`
  margin-left: 13%;
  margin-bottom: 0;

  @media screen and (max-width: 425px) {
    margin: 0;
  }
`;

export const HeroSubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

export const HeroSubtitle = styled.p`
  color: #fff;
  width: 377px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
    width: inherit;
  }
`;

export const HeroExploreLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20%;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }

  &::after {
    @media screen and (max-width: 768px) {
      width: 39px;
      height: 39px;
    }
  }
`;

export const HeroExploreLink = styled(LinkS)`
  color: #fff;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 2px solid #fff;
`;
