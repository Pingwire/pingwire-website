import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Button from './Button';

const StyledHero = styled('div')({
  display: 'flex',
  position: 'relative',
  'justify-content': 'center',
});

const StyledHeroContent = styled('div')({
  display: 'flex',
  position: 'absolute',
  'box-sizing': 'border-box',
  'align-items': 'flex-start',
  'flex-shrink': 1,
  'justify-content': 'center',
});

const StyledHeroHeader = styled('header')({
  display: 'flex',
  'flex-direction': 'column',
  'box-sizing': 'border-box',
  'flex-shrink': 1,
  'align-items': 'center',
});

const StyledHeroHeadline = styled('h1')({
  color: '#214032',
  width: '986px',
  'font-size': '48px',
  'align-self': 'auto',
  'font-style': 'normal',
  'text-align': 'center',
  'font-family': 'Roboto Mono',
  'font-weight': 'initial',
  'line-height': '70px',
  'font-stretch': 'normal',
});

const StyledHeroBody = styled('h2')({
  color: '#201F1F',
  width: '654px',
  'font-size': '22px',
  'font-style': 'normal',
  'text-align': 'center',
  'font-family': 'Inter',
  'font-weight': 'initial',
  'line-height': '178%',
  'font-stretch': 'normal',
});

const StyledButtonCard = styled('div')({
  margin: '10px',
  width: '176px',
  height: '74px',
  display: 'flex',
  position: 'relative',
  'box-sizing': 'border-box',
  'flex-shrink': 1,
  'align-items': 'center',
  'justify-content': 'center',
  'background-color': 'rgba(211, 220, 218, 1)',
  'border-radius': '5px',
});

const Hero = () => (
  <StyledHero>
    <StaticImage
      src="../images/randomNumbers.png"
      alt="A dinosaur"
      placeholder="blurred"
      width={1440}
      height={600}
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
          <Button as="a" href="mailto:sales@pingwire.io" variant="filled" size="big">
            Book demo
          </Button>
        </StyledButtonCard>
      </StyledHeroHeader>
    </StyledHeroContent>
  </StyledHero>
);

export default Hero;
