import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LineBreak from './LineBreak';
import breakpoints from '../../contants/breakpoints';
import useMediaQuery from '../hooks/useMediaQuery';

const BenefitsRow = styled('div')`
  margin-top: 10%;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  justify-content: space-evenly;
  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
  }
  flex-wrap: wrap;
`;

const BenefitColumn = styled('div')`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  @media (min-width: ${breakpoints.desktop}) {
    align-items: flex-start;
    width: 30%;
  }
`;

const BenefitColumnContent = styled('div')`
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  height: 300px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.desktop}) {
    align-items: flex-start;
    width: 80%;
    height: 350px;
  }
`;

const StyledBenefitColumnTitleContainer = styled('div')`
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
`;

const StyledBenefitColumnTitleSign = styled('h2')`
  color: rgba(223, 166, 57, 1);
  font-size: 16px;
  font-family: Roboto Mono;
  text-align: center;
  font-weight: initial;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
  }

`;

const StyledBenefitColumnTitleText = styled('h2')`
  color: rgba(33, 64, 50, 1);
  font-size: 16px;
  font-family: Roboto Mono;
  text-align: left;
  font-weight: initial;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 20px;
  }
`;

const StyledBenefitColumnBodyText = styled('p')`
  color: rgba(32, 31, 31, 1);
  width: 100%;
  font-size: 16px;
  text-align: center;
  font-family: Inter;
  font-weight: 400px;
  line-height: 178%;
  @media (min-width: ${breakpoints.desktop}) {
    text-align: left;
  }
`;

const StyledContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-direction: column;
  padding: 1% 2%;
  justify-content: space-between;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 156px;
  }
`;

const StyledHeader = styled('h1')({
  color: 'rgba(33, 64, 50, 1)',
  'font-size': '24px',
  'text-align': 'center',
  'font-family': 'Roboto Mono',
  'font-weight': 'initial',
});

const StyledBenefitCard = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
  flex-wrap: wrap;
  margin: 0 0 20% 0;
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0 0 5% 0;
  }
`;

const StyledCard = styled('div')`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${breakpoints.desktop}) {
    width: 45%;
    margin: 0;
  }
`;

const StyledCardHeader = styled('div')({
  margin: '0 0 40px 0',
  display: 'flex',
  'box-sizing': 'border-box',
  'align-items': 'flex-start',
  'flex-shrink': 1,
  'border-color': 'transparent',
  'flex-direction': 'column',
});

const StyledCardCategory = styled('p')({
  color: 'rgba(137, 137, 137, 1)',
  height: 'auto',
  margin: '0 0 4px 0',
  'font-size': '14px',
  'align-self': 'auto',
  'font-style': 'normal',
  'text-align': 'left',
  'font-family': 'Roboto Mono',
  'font-weight': 'initial',
  'line-height': 'normal',
  'font-stretch': 'normal',
  'text-decoration': 'none',
});

const StyledCardTitle = styled('h2')({
  color: '#214032',
  margin: 0,
  width: '100%',
  'font-size': '32px',
  'text-align': 'left',
  'font-family': 'Roboto Mono',
  'font-weight': 'initial',
});

const StyledCardContent = styled('h3')({
  color: '#201F1F',
  width: '100%',
  margin: 0,
  'font-size': '18px',
  'text-align': 'left',
  'font-family': 'Inter',
  'font-weight': 'initial',
  'line-height': '178%',
});

const BenefitCardsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10%',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
});

const Benefits = ({ id }) => {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.desktop})`);
  return (
    <StyledContainer>
      <StyledHeader id={id}>[Pingwire’s Benefits]</StyledHeader>
      <BenefitsRow>
        {!isDesktop && <LineBreak size="full" />}
        <BenefitColumn>
          {isDesktop && <LineBreak size="small" />}
          <BenefitColumnContent>
            <StyledBenefitColumnTitleContainer>
              <StyledBenefitColumnTitleSign>&gt;</StyledBenefitColumnTitleSign>
              <StyledBenefitColumnTitleText>EFFICIENT HANDLING_</StyledBenefitColumnTitleText>
            </StyledBenefitColumnTitleContainer>
            <StyledBenefitColumnBodyText>
              An intuitive case handling system supported by world class
              machine learning algorithms will ensure efficient handling
              of your compliance standards.
            </StyledBenefitColumnBodyText>
          </BenefitColumnContent>
          {isDesktop && <LineBreak size="small" />}
        </BenefitColumn>
        {!isDesktop && <LineBreak size="full" />}
        <BenefitColumn>
          {isDesktop && <LineBreak size="small" />}
          <BenefitColumnContent>
            <StyledBenefitColumnTitleContainer>
              <StyledBenefitColumnTitleSign>&gt;</StyledBenefitColumnTitleSign>
              <StyledBenefitColumnTitleText>ONE CONNECTION_</StyledBenefitColumnTitleText>
            </StyledBenefitColumnTitleContainer>
            <StyledBenefitColumnBodyText>
              You don’t want to spend time on data mapping. We have done the
              job for you. Get all the information you need by only one
              connection.
            </StyledBenefitColumnBodyText>
          </BenefitColumnContent>
          {isDesktop && <LineBreak size="small" />}
        </BenefitColumn>
        {!isDesktop && <LineBreak size="full" />}
        <BenefitColumn>
          {isDesktop && <LineBreak size="small" />}
          <BenefitColumnContent>
            <StyledBenefitColumnTitleContainer>
              <StyledBenefitColumnTitleSign>&gt;</StyledBenefitColumnTitleSign>
              <StyledBenefitColumnTitleText>RISK BASED APPROACH_</StyledBenefitColumnTitleText>
            </StyledBenefitColumnTitleContainer>
            <StyledBenefitColumnBodyText>
              The dynamic risk score is at heart of the solution so you
              spend your resources on what really matters.
            </StyledBenefitColumnBodyText>
          </BenefitColumnContent>
          {isDesktop && <LineBreak size="small" />}
        </BenefitColumn>
        {!isDesktop && <LineBreak size="full" />}
      </BenefitsRow>
      <BenefitCardsContainer>
        <StyledBenefitCard>
          <StaticImage
            src="../images/transaction.png"
            alt="A dinosaur"
            placeholder="blurred"
            width="568"
            height="400"
          />
          <StyledCard>
            <StyledCardHeader>
              <StyledCardCategory>[Benefit]</StyledCardCategory>
              <StyledCardTitle>Real time transaction monitoring</StyledCardTitle>
            </StyledCardHeader>
            <StyledCardContent>
              Pingwire helps you to react before it’s too late. Evaluate all
              your transactions and take decision in real time based on your
              risk assessment.
            </StyledCardContent>
          </StyledCard>
        </StyledBenefitCard>
        <StyledBenefitCard style={{ 'flex-wrap': 'wrap-reverse' }}>
          <StyledCard>
            <StyledCardHeader>
              <StyledCardCategory>[Benefit]</StyledCardCategory>
              <StyledCardTitle>Know-your-customer</StyledCardTitle>
            </StyledCardHeader>
            <StyledCardContent>
              The KYC process should work seamlessly to not interfere with the
              customer experience. Pingwire is built with this in mind.
            </StyledCardContent>
          </StyledCard>
          <StaticImage
            src="../images/kyc.png"
            alt="A dinosaur"
            placeholder="blurred"
            width="568"
            height="400"
          />
        </StyledBenefitCard>
        <StyledBenefitCard>
          <StaticImage
            src="../images/compliance.png"
            alt="A dinosaur"
            placeholder="blurred"
            width="568"
            height="400"
          />
          <StyledCard>
            <StyledCardHeader>
              <StyledCardCategory>[Benefit]</StyledCardCategory>
              <StyledCardTitle>Compliance reporting</StyledCardTitle>
            </StyledCardHeader>
            <StyledCardContent>
              As you have everything in the same solution, reporting is made
              with ease. Often you have to assemble information from several
              sources, now you will have access to everything in one solution.
            </StyledCardContent>
          </StyledCard>
        </StyledBenefitCard>
        <LineBreak size="full" />
      </BenefitCardsContainer>
    </StyledContainer>
  );
};

export default Benefits;

Benefits.propTypes = {
  id: PropTypes.string.isRequired,
};
