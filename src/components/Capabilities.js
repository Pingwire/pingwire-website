import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import breakpoints from '../../contants/breakpoints';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 2rem 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 4rem 2rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding: 6rem 2rem;
  }
`;

const StyledTitle = styled('h1')`
  color: rgba(33, 64, 50, 1);
  margin-top: 0;
  font-size: 18px;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`;

const StyledSubTitle = styled('h2')`
  max-width: 60rem;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;
  font-size: 26px;
  margin: 2rem 0;

  @media (min-width: ${breakpoints.tablet}) {
    margin: 4rem 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 40px;
    margin: 6rem 0;
  }
`;

const StyleCardRowContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: ${breakpoints.desktop}) {
    gap: 4rem;
  }
`;

const StyleCardColumnContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: space-between;
  flex-direction: column;
`;

const Card = styled('div')`
  display: flex;
  padding: 3rem 2rem;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
  background-color: ${(props) => {
    if (props.color === 'green') return '#214032';
    if (props.color === 'red') return '#D1603C';
    if (props.color === 'yellow') return '#DFA639';
    return '#2A2A2A';
  }}
`;

const CardHeader = styled('div')`
  width: 100%;
  margin: 0 0 40px 0;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  justify-content: space-between;
`;

const CardTitle = styled('h1')`
  color: rgba(255, 255, 255, 1);
  max-width: 362px;
  width: 100%;
  font-size: 24px;
  text-align: left;
  font-family: Roboto Mono;
  font-weight: 700px;
  line-height: 42px;
  margin: 2px;
`;

const CardContent = styled('h2')`
  color: #FFFFFF;
  max-width: 468px;
  opacity: 0.90;
  font-size: 18px;
  text-align: left;
  font-family: Inter;
  font-weight: inherit;
  line-height: 178%;
  margin: 0;
`;

const Capabilities = ({ id }) => (
  <Container id={id}>
    <StyledTitle>[Pingwire’s capabilities]</StyledTitle>
    <StyledSubTitle>Pingwire’s case handling capabilities in a snapshot</StyledSubTitle>
    <StyleCardRowContainer>
      <StyleCardColumnContainer>
        <Card color="green">
          <CardHeader>
            <CardTitle>Rule library for thorough risk analysis</CardTitle>
            <StaticImage
              src="../images/rule_libary.svg"
              alt="A dinosaur"
              placeholder="tracedSVG"
            />
          </CardHeader>
          <CardContent>
            Complex rules and triggers are made clear with the rule library
            and interface.
          </CardContent>
        </Card>
      </StyleCardColumnContainer>
      <StyleCardColumnContainer>
        <Card color="red">
          <CardHeader>
            <CardTitle>Intuitive case handling and overview</CardTitle>
            <StaticImage
              src="../images/case_handling.svg"
              alt="A dinosaur"
              placeholder="tracedSVG"
            />
          </CardHeader>
          <CardContent>
            Effortless navigation of all your business flows in the lenses of
            compliance.
          </CardContent>
        </Card>
      </StyleCardColumnContainer>
      <StyleCardColumnContainer>
        <Card color="yellow">
          <CardHeader>
            <CardTitle>Access to several data sources</CardTitle>
            <StaticImage
              src="../images/access_to_data_sources.svg"
              alt="A dinosaur"
              placeholder="tracedSVG"
            />
          </CardHeader>
          <CardContent>
            One connection to rule them all.
            You will have access to all the information you might need to be compliant.
          </CardContent>
        </Card>
      </StyleCardColumnContainer>
      <StyleCardColumnContainer>
        <Card>
          <CardHeader>
            <CardTitle>Get help to prioritize your tasks</CardTitle>
            <StaticImage
              src="../images/prioritize.svg"
              alt="A dinosaur"
              placeholder="tracedSVG"
            />
          </CardHeader>
          <CardContent>
            One connection to rule them all.
            You will have access to all the information you might need to be compliant.
          </CardContent>
        </Card>
      </StyleCardColumnContainer>
    </StyleCardRowContainer>
  </Container>
);

export default Capabilities;

Capabilities.propTypes = {
  id: PropTypes.string.isRequired,
};
