import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
`;

export const AboutWrapper = styled.div`
  padding: 3rem 11rem 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const AboutDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15rem;
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
`;

export const AboutStatisticsWrapper = styled.div`
  display: flex;
  gap: 19rem;
`;

export const AboutImageContainer = styled.div`
  width: 380px;
  height: 380px;
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
`;

export const AboutStatisticsRow = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-start;
`;

export const AboutStatisticsItemContainer = styled.div`
  padding: 1px;
  flex-basis: 207px;
`;

export const AboutStatisticsItemHeading = styled.h2`
  font-weight: 600;
  font-size: 3rem;
`;

export const AboutStatisticsItemDescription = styled.p`
  text-transform: uppercase;
`;
