import React from 'react';
import styled from 'styled-components';
import LineBreak from './LineBreak';
import Button from './Button';
import breakpoints from '../../contants/breakpoints';
import useMediaQuery from '../hooks/useMediaQuery';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15% 2% 15% 2%;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 156px;
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
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: start ;
  }
`;

const StyledCardContainer = styled('div')`
  margin: 0 1% 0 0;
  width: 80%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  flex-wrap: wrap;
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
  @media (min-width: ${breakpoints.desktop}) {
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
  @media (min-width: ${breakpoints.desktop}) {
    text-align: left;
`;

const StyledChallengesContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-bottom: 5%;
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: space-between;
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
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 1%
`;

const ChallengesListItemContainer = styled('div')`
  display: flex;
  align-items: ${(props) => {
    if (props.position === 'top') return 'start';
    if (props.position === 'bottom') return 'end';
    return 'center';
  }};
  height: 100%;
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
  margin: 0  0 5% 0;
  font-size: 26px;
  font-family: Roboto Mono;
  font-weight: inherit;
  text-align: left;
  @media (min-width: ${breakpoints.desktop}) {
    width: 40%;
    font-size: 40px;
    margin: 0;
  }
`;

const ButtonContainer = styled('div')`
  padding: 20px;
`;

const LineContainer = styled('div')`
  padding-top: 10%;
  width: 100%;
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
          <Button as="a" href="mailto:sales@pingwire.io" variant="outlined" textColor="primary">
            Book demo
          </Button>
        </ButtonContainer>
      </StyledCard>
      <LineContainer>
        <LineBreak size="full" />
      </LineContainer>
    </Container>

  );
};

export default Challenges;
