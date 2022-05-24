import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Button from './Button';
import breakpoints from '../../contants/breakpoints';

const StyledCard = styled('div')`
  width: 100%;
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  box-sizing: border-box;
  flex-shrink: 1;
  align-self: center;
  background-color: rgba(33, 64, 50, 1);
  padding: 5%;
  margin-bottom: 10%;
  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
    padding: 0% 10% 10% 10%;
    
  }
`;

const StyledHeader = styled('div')`
  width: 100%;
  margin: 2%;
  padding-bottom: 2%;
`;

const StyledCardContent = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
`;

const StyledTitle = styled('h1')`
  color: rgba(255, 255, 255, 1);
  height: auto;
  margin: 0;
  font-size: 24px;
  font-family: Roboto Mono;
  font-weight: inherit;
`;

const StyledSubTitle = styled('h2')`
  color: rgba(255, 255, 255, 1);
  font-size: 32px;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;
`;

const StyledText = styled('p')`
  color: rgba(255, 255, 255, 1);
  margin: 0;
  font-size: 18px;
  text-align: center;
  font-family: Inter;
  line-height: 180%;
  padding-bottom: 5%
`;

const Contact = () => (
  <StyledCard>
    <StyledHeader>
      <StaticImage
        src="../images/Pingwire_logo_white.svg"
        alt="A dinosaur"
        placeholder="tracedSVG"
      />
    </StyledHeader>
    <StyledCardContent>
      <StyledTitle>[Get in touch]</StyledTitle>
      <StyledSubTitle>Let us show how we can improve your AML &amp; CTF processes</StyledSubTitle>
      <StyledText>
        Send us a email and we will come back to you as soon
        as possible.
      </StyledText>
      <Button
        variant="filled"
        backgroundColor="white"
        textColor="primary"
        size="big"
        as="a"
        href="mailto:sales@pingwire.io"
      >
        Book demo
      </Button>
    </StyledCardContent>
  </StyledCard>
);

export default Contact;
