import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: -113px;
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
  padding: 0 50px;
  margin-bottom: 79px;
`;

export const HeroHeadingContainer = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-size: 8rem !important;
  font-style: normal;
  margin-bottom: 5rem;
`;

export const HeroHeading = styled(HeroHeadingContainer)`
  margin-bottom: 0;
`;

export const HeroHeadingItalic = styled(HeroHeadingContainer)`
  font-style: italic;
  margin-bottom: 0;
`;

export const HeroHeadingMargin = styled(HeroHeadingContainer)`
  margin-left: 15rem;
  margin-bottom: 0;
`;

export const HeroSubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; ;
`;

export const HeroSubtitle = styled.p`
  color: #fff;
  width: 377px;
`;

export const HeroExploreLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 37rem;
  gap: 1rem;
`;

export const HeroExploreLink = styled(LinkS)`
  color: #fff;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 2rem;
  text-decoration: none;
  border-bottom: 2px solid #fff;
`;
