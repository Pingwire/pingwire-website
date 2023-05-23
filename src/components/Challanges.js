import React from 'react';
import styled from 'styled-components';

import LinkButton from './LinkButton';

import breakpoints from '../../contants/breakpoints';
import useMediaQuery from '../hooks/useMediaQuery';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 4rem 4rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding: 6rem 9rem;
  }
`;

const StyledCard = styled('div')`
  display: flex;
  padding: 4% 4% 3% 4%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(230, 235, 234, 1);
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.laptop}) {
    justify-content: start ;
  }
`;

const StyledCardContainer = styled('div')`
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.laptop}) {
    width: 80%;
  }
`;

const StyledCardTextContainer = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  flex-direction: column;
`;

const StyledCardTitle = styled('h2')`
  color: rgba(33, 64, 50, 1);
  margin: 0 0 32px 0;
  font-size: 40px;
  font-style: normal;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: inherit;

  @media (min-width: ${breakpoints.laptop}) {
    text-align: left;
  }
`;

const StyledCardContentText = styled('p')`
  color: rgba(32, 31, 31, 1);
  width: 100%;
  margin: 0;
  font-size: 18px;
  text-align: center;
  font-family: Inter;
  font-weight: 400px;
  line-height: 178%;
  @media (min-width: ${breakpoints.laptop}) {
    text-align: left;
  }
`;

const StyledChallengesContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.laptop}) {
    margin-bottom: 3rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    margin-bottom: 4rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin-bottom: 6rem;
  }
`;

const StyledCircle = styled('span')`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background: #DFA639;
  margin-left: -10px;
  position: absolute;
`;

const ChallengesListContainer = styled('div')`
  border-left: 4px solid #DFA639;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0.5rem;
`;

const ChallengesListItemContainer = styled('div')`
  display: flex;
  align-items: ${(props) => {
    if (props.position === 'top') return 'start';
    if (props.position === 'bottom') return 'end';
    return 'center';
  }};

  @media (min-width: ${breakpoints.tablet}) {
    height: 50px;
  }
`;

const ChallengesListItemTitle = styled('h3')`
  margin: -5px 0 0 15px;
  font-weight: inherit;
  font-size: 18px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const StyledTitle = styled('h1')`
  color: #201F1F;
  margin: 0;
  font-size: 26px;
  font-family: Roboto Mono;
  font-weight: bold;
  text-align: left;

  @media (min-width: ${breakpoints.laptop}) {
    width: 40%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 40px;
  }
`;

const ButtonContainer = styled('div')`
  padding: 20px;
`;

const Challenges = () => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.desktop})`);
  return (
    <Container>
      <StyledChallengesContainer>
        <StyledTitle>Challenges in today’s regulatory landscape</StyledTitle>
        <ChallengesListContainer>
          <ChallengesListItemContainer position="top">
            <StyledCircle />
            <ChallengesListItemTitle>Outdated solutions that won’t do the job</ChallengesListItemTitle>
          </ChallengesListItemContainer>
          <ChallengesListItemContainer>
            <StyledCircle />
            <ChallengesListItemTitle style={{ paddingTop: isDesktop ? 0 : '2%' }}>Constantly changing regulations</ChallengesListItemTitle>
          </ChallengesListItemContainer>
          <ChallengesListItemContainer position="bottom">
            <StyledCircle />
            <ChallengesListItemTitle style={{ paddingTop: isDesktop ? 0 : '5%' }}>Growing complexity in transactions and data</ChallengesListItemTitle>
          </ChallengesListItemContainer>
        </ChallengesListContainer>
      </StyledChallengesContainer>
      <StyledCard>
        <StyledCardContainer>
          <StyledCardTextContainer>
            <StyledCardTitle>
              Pingwire helps you overcome all these challenges
            </StyledCardTitle>
            <StyledCardContentText>
              We know how important it is to be up to date with the
              regulatory challenges. As your partner we will always help you
              to be compliant so you can focus on your business.
            </StyledCardContentText>
          </StyledCardTextContainer>
        </StyledCardContainer>
        <ButtonContainer>
          <LinkButton to="/contact/" variant="outlined" textColor="primary">
            Contact Us
          </LinkButton>
        </ButtonContainer>
      </StyledCard>
    </Container>

  );
};

export default Challenges;
