import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LineBreak from './LineBreak';
import TextLink from './TextLink';

const Container = styled('div')`
  width: 80%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin-top: 10%;
  background-color: rgba(230, 235, 234, 1);
  align-self: center;
`;

const VerticalLine = styled('div')`
   border-left: 1px solid rgba(33, 64, 50, 0.25);
   height: 80%;
   margin-top: 5%;
`;

const StyledLargeTextContainer = styled('div')`
   width: 100%;
   height: 15%;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   padding-left: 5%;
`;

const LeftContainer = styled('div')`
  width: 672px;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const StyledLargeText = styled('h2')`
  color: #214032;
  font-size: 48px;
  text-align: left;
  font-family: Roboto Mono;
  font-weight: inherit;
`;

const RightContainer = styled('div')`
  width: 288px;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
  justify-content: space-evenly;
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
  width: 80%;
  height: 178px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledTitle = styled('h1')`
  color: #214032;
  height: auto;
  margin: 0;
  padding-left: 5%;
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

const Onboarding = ({ id }) => (
  <Container id={id}>
    <LeftContainer>
      <StyledTitle>[Pingwire’s Onboarding]</StyledTitle>
      <StyledLargeTextContainer>
        <StyledLargeText>Easy to get started</StyledLargeText>
        <LineBreak size="full" />
      </StyledLargeTextContainer>
      <StaticImage
        src="../images/dots.svg"
        alt="A dinosaur"
        placeholder="tracedSVG"
      />
    </LeftContainer>
    <VerticalLine />
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
