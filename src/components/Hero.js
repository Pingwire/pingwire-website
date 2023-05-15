import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import LinkButton from './LinkButton';

import breakpoints from '../../contants/breakpoints';

const StyledHero = styled('div')`
  display: flex;
  justify-content: center;
  position: relative;
  width: calc(100% - 2rem);
  padding: 2rem 1rem;
`;

const StyledHeroContent = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: center;
`;

const StyledHeroHeader = styled('div')`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-shrink: 1;
  align-items: center;
`;

const StyledHeroHeadline = styled('h1')`
  color: #214032;
  max-width: 50rem;
  font-size: 28px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: bold;
  line-height: 37px;
  font-stretch: normal;
  margin-top: 0;
  @media (min-width: ${breakpoints.laptop}) {
    max-width: 60rem;
    font-size: 48px;
    line-height: 70px;
  }
  `;

const StyledHeroBody = styled('h2')`
  color: #201F1F;
  max-width: 40rem;
  font-size: 22px;
  font-style: normal;
  text-align: center;
  font-family: Inter;
  font-weight: initial;
  line-height: 178%;
  font-stretch: normal;
`;

const StyledButtonCard = styled('div')`
  margin: 10px;
  width: 176px;
  height: 74px;
  display: flex;
  box-sizing: border-box;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(211, 220, 218, 1);
  border-radius: 5px;
`;

const backgroundStyle = {
  position: 'absolute',
  zIndex: -1,
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
};

const Hero = () => (
  <StyledHero>
    <StaticImage
      src="../images/randomNumbers.png"
      alt="A dinosaur"
      placeholder="blurred"
      width={1440}
      height={600}
      layout="constrained"
      style={backgroundStyle}
    />
    <StyledHeroContent>
      <StyledHeroHeader>
        <StyledHeroHeadline>
          The next generation solution to combat money-laundering and terrorism financing
        </StyledHeroHeadline>
        <StyledHeroBody>
          Pingwire is a software service helping companies to be fully
          compliant with their anti-money laundering and counter terrorist
          financing standards.
        </StyledHeroBody>
        <StyledButtonCard>
          <LinkButton to="/contact/" variant="filled" size="big">
            Book demo
          </LinkButton>
        </StyledButtonCard>
      </StyledHeroHeader>
    </StyledHeroContent>
  </StyledHero>
);

export default Hero;
