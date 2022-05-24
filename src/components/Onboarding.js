import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LineBreak from './LineBreak';
import TextLink from './TextLink';
import breakpoints from '../../contants/breakpoints';
import useMediaQuery from '../hooks/useMediaQuery';

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10%;
  flex-wrap: wrap;
  background-color: rgba(230, 235, 234, 1);
  align-self: center;
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: space-between;
    height: 45rem;
  }
  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
  }
 
`;

const VerticalLine = styled('div')`
   border-left: 1px solid rgba(33, 64, 50, 0.25);
   height: 80%;
   margin-top: 5%;
`;

const StyledLargeTextContainer = styled('div')`
   height: 15%;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   padding: 1px;
`;

const LeftContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
  padding-bottom: 5%;
  flex-wrap: wrap;
  height: 10%;
  @media (min-width: ${breakpoints.tablet}) {
    height: 20%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    align-items: flex-start;
    height: 50%;
    padding-left: 50px;
  }
`;

const StyledLargeText = styled('h2')`
  color: #214032;
  font-size: 32px;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 48px;
    text-align: left;
  }
`;

const RightContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.desktop}) {
    width: 20%;
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
  margin: 0,
  width: 5%;
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
  width: 100%;
  height: 178px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  @media (min-width: ${breakpoints.tablet}) {
    align-items: center;
  }
  @media (min-width: ${breakpoints.desktop}) {
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
  position: relative;
  top: 85%;
  left: 30%;
  @media (min-width: ${breakpoints.desktop}) {
    left: -90%;
  }
`;

const Onboarding = ({ id }) => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.desktop})`);
  return (
    <Container id={id}>
      <LeftContainer>
        <StyledTitle>[Pingwire’s Onboarding]</StyledTitle>
        <StyledLargeTextContainer>
          <StyledLargeText>Easy to get started</StyledLargeText>
          <LineBreak size="full" />
        </StyledLargeTextContainer>
      </LeftContainer>
      {isDesktop && <VerticalLine />}
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
      <IconContainer>
        <StaticImage
          src="../images/dots.svg"
          alt="A dinosaur"
          placeholder="tracedSVG"
        />
      </IconContainer>
    </Container>

  );
};

export default Onboarding;

Onboarding.propTypes = {
  id: PropTypes.string.isRequired,
};
