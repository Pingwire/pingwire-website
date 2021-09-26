import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledHero = styled('div')`
  min-height: 30rem;
  background-image: url("./assets/images/hero.svg");
  background-size: cover;
  background-position: bottom right;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 1440px) {
    padding-left: 20%;
    padding-right: 20%;
  }
`;

const StyledHeroContent = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  max-width: 35rem;
`;

const StyledHeader = styled('header')`
  height: 2rem;
  padding: 1rem 0;
  display: flex;
`;

const StyledLogo = styled('img')`
  height: 2rem;
`;

const StyledHeadline = styled('h1')`
  margin-top: 0;
  margin-bottom: 2rem;
`;

const Hero = () => (
  <StyledHero>
    <StyledHeader>
      <StyledLogo src="./assets/images/logo.svg" alt="Pingwire" />
    </StyledHeader>
    <StyledHeroContent>
      <StyledHeadline>
        Utilising data for greater insights of money laundering and terrorism finansing risks
      </StyledHeadline>
      <Button as="a" href="mailto:sales@pingwire.io">
        Contact sales
      </Button>
    </StyledHeroContent>
  </StyledHero>
);

export default Hero;
