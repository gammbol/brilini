import { Link as LinkS } from "react-scroll";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: -113px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const HeroContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
`;

export const HeroHeading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-size: 6rem;
`;

export const HeroSubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroSubtitle = styled.p`
  color: #fff;
`;

export const HeroExploreLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroExploreLink = styled(LinkS)`
  color: #fff;
  text-transform: uppercase;
  text-decoration: underline;
`;
