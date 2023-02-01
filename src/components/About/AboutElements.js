import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
`;

export const AboutWrapper = styled.div`
  /* padding: 3rem 11rem 0 3rem; */
  padding-right: 11rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const AboutDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AboutHeading = styled.h1`
  align-self: flex-start;
  color: #000;
  text-transform: uppercase;
  font-size: 7.8rem;
`;

export const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AboutDescriptionParagraph = styled.p`
  color: #000;
  font-family: "Inter", sans-serif;
  max-width: 40rem;

  @media screen and (min-width: 2560px) {
    max-width: 60rem;
    font-size: 1.5rem;
  }
`;

export const AboutStatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const AboutImageContainer = styled.div`
  width: 380px;
  height: 380px;

  @media screen and (min-width: 2560px) {
    width: 570px;
    height: 570px;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const AboutStatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 6rem;
  width: 40rem;

  @media screen and (min-width: 2560px) {
    font-size: 1.5rem;
    width: 60rem;
  }
`;

export const AboutStatisticsRow = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-start;

  @media screen and (min-width: 2560px) {
    gap: 10rem;
  }
`;

export const AboutStatisticsItemContainer = styled.div`
  padding: 1px;
  flex-basis: 207px;

  @media screen and (min-width: 2560px) {
    flex-basis: 300px;
  }
`;

export const AboutStatisticsItemHeading = styled.h2`
  font-weight: 600;
  font-size: 3rem;
`;

export const AboutStatisticsItemDescription = styled.p`
  text-transform: uppercase;
`;
