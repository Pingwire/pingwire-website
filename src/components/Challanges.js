import React from 'react';
import styled from 'styled-components';
import LineBreak from './LineBreak';
import Button from './Button';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  justify-content: space-between;
  width: 100%;
  height: 10%;
`;

const StyledCard = styled('div')`
  width: 80%;
  display: flex;
  padding: 4% 4% 3% 4%;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(230, 235, 234, 1);
`;

const StyledCardContainer = styled('div')`
  margin: 0 24px 0 0;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
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
  width: 830px;
  margin: 0 0 32px 0;
  font-size: 40px;
  font-style: normal;
  text-align: left;
  font-family: Roboto Mono;
  font-weight: inherit;
`;

const StyledCardContentText = styled('p')`
  color: rgba(32, 31, 31, 1);
  width: 830px;
  font-size: 18px;
  text-align: left;
  font-family: Inter;
  font-weight: 400px;
  line-height: 178%;
`;

const StyledChallengesContainer = styled('div')`
  width: 1128px;
  display: flex;
  align-items: center;
  flex-shrink: 1,
  border-color: transparent;
`;

const StyledCircle = styled('span')`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background: #DFA639;
  margin-left: -10px;
`;

const ChallengesListContainer = styled('div')`
  border-left: 4px solid #DFA639;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ChallengesListItemContainer = styled('div')`
  display: flex;
  align-items: ${(props) => {
    if (props.position === 'top') return 'start';
    if (props.position === 'bottom') return 'end';
    return 'center';
  }};
`;

const ChallengesListItemTitle = styled('h3')`
  margin: -5px 0 0 15px;
  font-weight: inherit;
`;

const StyledTitle = styled('h1')({
  color: '#201F1F',
  width: '40%',
  margin: '0 10% 0 0',
  'font-size': '40px',
  'font-family': 'Roboto Mono',
  'font-weight': 'inherit',
});

const LineContainer = styled('div')`
  width: 80%;
`;
const Challenges = () => (
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
          <ChallengesListItemTitle>Constantly changing regulations</ChallengesListItemTitle>
        </ChallengesListItemContainer>
        <ChallengesListItemContainer position="bottom">
          <StyledCircle />
          <ChallengesListItemTitle>Growing complexity in transactions and data</ChallengesListItemTitle>
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
      <Button as="a" href="mailto:sales@pingwire.io" variant="outlined">
        Book demo
      </Button>
    </StyledCard>
    <LineContainer>
      <LineBreak size="full" />
    </LineContainer>
  </Container>

);

export default Challenges;
