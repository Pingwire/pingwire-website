import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled('div')`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  margin-top: 10%
`;

const StyledCard = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
`;

const StyledHeader = styled('div')`
  margin: 0 0 10% 0;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  flex-direction: column;
`;

const StyledSubTitle = styled('h2')`
  color: rgba(137, 137, 137, 1);
  margin: 0px;
  font-size: 14px;
  font-family: Roboto Mono;
  font-weight: inherit;
`;

const StyledTitle = styled('h1')`
  color: #214032;
  margin: 0px;
  font-size: 32px;
  font-family: Roboto Mono;
  font-weight: inherit;
`;

const StyledContentText = styled('p')`
  color: rgba(42, 42, 42, 1);
  width: 488px;
  margin: 0px;
  font-size: 18px;
  font-family: Inter;
  line-height: 166%;
`;

const AboutUs = ({ id }) => (
  <Container id={id}>
    <StyledCard>
      <StyledHeader>
        <StyledSubTitle>[Driven to do better]</StyledSubTitle>
        <StyledTitle>About us</StyledTitle>
      </StyledHeader>
      <StyledContentText>
        Pingwire is a Stockholm based software company developing the next
        generation software to fight money laundering, terrorist financing
        and fraud. As experts in data science, software development and
        financial regulations we’re on a mission to always be one step
        ahead of those who want to exploit our financial systems. If we
        let money laundering happen it will undermine the integrity of
        national economies and threaten our democracies. Pingwire is on
        the forefront of the battle against financial crime. Please join
        us on that mission!
      </StyledContentText>
    </StyledCard>
    <StaticImage
      src="../images/AboutUs.png"
      alt="A dinosaur"
      placeholder="blurred"
      width={568}
      height={400}
    />
  </Container>

);

export default AboutUs;

AboutUs.propTypes = {
  id: PropTypes.string.isRequired,
};
