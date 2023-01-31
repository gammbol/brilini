import React from "react";
import AboutImagePng from "../../images/about.png";
import {
  AboutContainer,
  AboutDescription,
  AboutDescriptionContainer,
  AboutDescriptionParagraph,
  AboutHeading,
  AboutImage,
  AboutImageContainer,
  AboutStatisticsContainer,
  AboutStatisticsItemContainer,
  AboutStatisticsItemDescription,
  AboutStatisticsItemHeading,
  AboutStatisticsRow,
  AboutStatisticsWrapper,
  AboutWrapper,
} from "./AboutElements";
import { ItemFour, ItemOne, ItemThree, ItemTwo } from "./Data";

const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutDescriptionContainer>
          <AboutHeading>About</AboutHeading>
          <AboutDescription>
            <AboutDescriptionParagraph>
              We have created an architectural and design bureau, distinguished
              by an innovative creative approach in the field of design and the
              highest level of ethics in the field of business, based on honest
              and open relationships, we reach an understanding with the client
              and partners. We brought together highly qualified professionals
              dedicated to their work, motivated to succeed in all areas related
              to the objects of architecture and design.
            </AboutDescriptionParagraph>
            <AboutDescriptionParagraph>
              High standards of quality, creativity of ideas, absolute mastery
              of the regulatory framework, responsibility for the executed
              projects - all this enables the client to trust us. We are focused
              on satisfying the client's design needs, integrating them into the
              creative process of architectural design, interior design and
              other sections of the project. We are expanding the range of
              activities of our architectural company, to achieve a balance in
              the system of "ideas and implementation." Our team consists of
              architects, designers and engineers from different areas.
            </AboutDescriptionParagraph>
          </AboutDescription>
        </AboutDescriptionContainer>
        <AboutStatisticsWrapper>
          <AboutImageContainer>
            <AboutImage alt="About" src={AboutImagePng} />
          </AboutImageContainer>
          <AboutStatisticsContainer>
            <AboutStatisticsRow>
              <AboutStatisticsItemContainer>
                <AboutStatisticsItemHeading>
                  {ItemOne.heading}
                </AboutStatisticsItemHeading>
                <AboutStatisticsItemDescription>
                  {ItemOne.desc}
                </AboutStatisticsItemDescription>
              </AboutStatisticsItemContainer>
              <AboutStatisticsItemContainer>
                <AboutStatisticsItemHeading>
                  {ItemTwo.heading}
                </AboutStatisticsItemHeading>
                <AboutStatisticsItemDescription>
                  {ItemTwo.desc}
                </AboutStatisticsItemDescription>
              </AboutStatisticsItemContainer>
            </AboutStatisticsRow>
            <AboutStatisticsRow>
              <AboutStatisticsItemContainer>
                <AboutStatisticsItemHeading>
                  {ItemThree.heading}
                </AboutStatisticsItemHeading>
                <AboutStatisticsItemDescription>
                  {ItemThree.desc}
                </AboutStatisticsItemDescription>
              </AboutStatisticsItemContainer>
              <AboutStatisticsItemContainer>
                <AboutStatisticsItemHeading>
                  {ItemFour.heading}
                </AboutStatisticsItemHeading>
                <AboutStatisticsItemDescription>
                  {ItemFour.desc}
                </AboutStatisticsItemDescription>
              </AboutStatisticsItemContainer>
            </AboutStatisticsRow>
          </AboutStatisticsContainer>
        </AboutStatisticsWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
