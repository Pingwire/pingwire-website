import React from 'react';
import styled from 'styled-components';

const StyledHero = styled('div')`
  min-height: 35rem;
  background-image: url("./assets/images/hero.svg");
  background-size: cover;
  background-position: bottom right;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
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

const StyledButton = styled('button')`
  text-decoration: none;
  color: white;
  padding: 1rem 2rem;
  background-color: #00C390;
  align-self: flex-start;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #00916B;
  }
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
      <StyledButton as="a" href="mailto:sales@pingwire.io">
        Contact sales
      </StyledButton>
    </StyledHeroContent>
  </StyledHero>
);

export default Hero;
