import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';

const Container = styled('div')`
  width: 100%;
  height: 14%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%
`;

const StyledTitle = styled('h1')`
  color: rgba(33, 64, 50, 1);
  font-size: 24px;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;
`;

const StyledSubTitle = styled('h2')`
  width: 65%;
  font-size: 40px;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;
  margin: 0;
`;

const StyleCardRowContainer = styled('div')`
  width: 80%;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: space-between;
`;

const StyleCardColumnContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: space-between;
  flex-direaction: column;
`;

const Card = styled('div')`
  width: 100%;
  display: flex;
  padding: 48px 32px;
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
  position: relative;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  justify-content: space-between;
`;

const CardTitle = styled('h1')`
  color: rgba(255, 255, 255, 1);
  width: 362px;
  font-size: 24px;
  text-align: left;
  font-family: Roboto Mono;
  font-weight: 700px;
  line-height: 42px;
`;

const CardContent = styled('h2')`
  color: #FFFFFF;
  width: 468px;
  opacity: 0.90;
  font-size: 18px;
  text-align: left;
  font-family: Inter;
  font-weight: inherit;
  line-height: 178%;
  margin: 0;
`;

const Capabilities = ({ id }) => (
  <Container>
    <StyledTitle id={id}>[Pingwire’s capabilities]</StyledTitle>
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
    </StyleCardRowContainer>
    <StyleCardRowContainer>
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
