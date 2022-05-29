import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextLink from './TextLink';
import breakpoints from '../../contants/breakpoints';

const Container = styled('div')`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(230, 235, 234, 1);
  align-self: center;
  align-items: stretch;
  gap: 2rem;

  @media (min-width: ${breakpoints.laptop}) {
    justify-content: space-between;
  }

  margin: 0;
  padding: 1rem 1rem 5rem;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 3rem 2rem;
    padding: 2rem;
  }
  @media (min-width: ${breakpoints.laptop}) {
    margin: 4rem 4rem;
    padding: 3rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin: 6rem 9rem;
    padding: 4rem;
  }
`;

const LeftContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: ${breakpoints.laptop}) {
    align-items: flex-start;
  }
`;

const StyledLargeText = styled('h2')`
  color: #214032;
  font-size: 32px;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 48px;
    text-align: left;
  }
`;

const RightContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: ${breakpoints.laptop}) {
    width: 27%;
    border-left: 1px solid rgba(33, 64, 50, 0.25);
    padding: 2rem 0 2rem 3rem;
  }
`;

const StyledRightContainerTitle = styled('h2')`
  color: rgba(33, 64, 50, 1);
  margin: 0;
  font-size: 20px;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;
`;

const StyledRightContentContainer = styled('div')`
  color: #201F1F;
  margin: 0;
  opacity: 0.70;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: left;
  font-family: Inter;
  font-weight: inherit;
  line-height: 178%;
`;

const StyledRightContentText = styled('p')`
  color: rgba(32, 31, 31, 1);
  opacity: 0.70;
  text-align: left;
`;

const RightContainerRow = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    align-items: center;
  }
  @media (min-width: ${breakpoints.laptop}) {
    align-items: flex-start;
  }
`;

const StyledTitle = styled('h1')`
  color: #214032;
  height: auto;
  margin: 0;
  font-size: 24px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
`;

const IconContainer = styled('div')`
  position: absolute;
  margin-left: -30px;
  right: 2rem;
  bottom: 1rem;

  @media (min-width: ${breakpoints.laptop}) {
    position: static;
  }
`;

const Onboarding = ({ id }) => (
  <Container id={id}>
    <LeftContainer>
      <StyledTitle>[Pingwire’s Onboarding]</StyledTitle>
      <StyledLargeText>Easy to get started</StyledLargeText>
      <IconContainer>
        <StaticImage
          src="../images/dots.svg"
          alt="A dinosaur"
          placeholder="tracedSVG"
        />
      </IconContainer>
    </LeftContainer>
    <RightContainer>
      <RightContainerRow>
        <StyledRightContainerTitle>API</StyledRightContainerTitle>
        <StyledRightContentContainer>
          <StyledRightContentText>
            Our modern API ensures a swift and easy integration.
          </StyledRightContentText>
          <TextLink href="https://docs.pingwire.io/">
            Visit our API webpage
          </TextLink>
        </StyledRightContentContainer>
      </RightContainerRow>
      <RightContainerRow>
        <StyledRightContainerTitle>WEB LOGIN</StyledRightContainerTitle>
        <StyledRightContentContainer>
          <StyledRightContentText>
            Easy accessible for all stakeholders through web login.
          </StyledRightContentText>
          <TextLink href="https://app.pingwire.io/">
            Log in
          </TextLink>
        </StyledRightContentContainer>
      </RightContainerRow>
    </RightContainer>
  </Container>
);

export default Onboarding;

Onboarding.propTypes = {
  id: PropTypes.string.isRequired,
};
