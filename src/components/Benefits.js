import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LineBreak from './LineBreak';

const BenefitsRow = styled('div')({
  'margin-top': '10%',
  display: 'flex',
  width: '100%',
  'box-sizing': 'border-box',
  'align-items': 'flex-start',
  'flex-shrink': 1,
  'justify-content': 'space-between',
});

const BenefitColumn = styled('div')({
  display: 'flex',
  'flex-direction': 'column',
  position: 'relative',
  'box-sizing': 'border-box',
  'align-items': 'flex-start',
  'flex-shrink': 1,
  'border-color': 'transparent',
});

const BenefitColumnContent = styled('div')({
  'padding-top': '25px',
  'padding-bottom': '25px',
  width: '296px',
  height: '282px',
  display: 'flex',
  'box-sizing': 'border-box',
  'align-items': 'flex-start',
  'flex-shrink': 1,
  'flex-direction': 'column',
});

const StyledBenefitColumnTitleContainer = styled('div')({
  margin: '0 0 24px 0',
  display: 'flex',
  'align-items': 'center',
});

const StyledBenefitColumnTitleSign = styled('h2')({
  color: 'rgba(223, 166, 57, 1)',
  'font-size': '20px',
  'font-family': 'Roboto Mono',
  'text-align': 'left',
  'font-weight': 'initial',
});

const StyledBenefitColumnTitleText = styled('h2')({
  color: 'rgba(33, 64, 50, 1)',
  'font-size': '20px',
  'font-family': 'Roboto Mono',
  'text-align': 'left',
  'font-weight': 'initial',
});

const StyledBenefitColumnBodyText = styled('span')({
  color: 'rgba(32, 31, 31, 1)',
  width: '296px',
  height: 'auto',
  'font-size': '16px',
  'text-align': 'left',
  'font-family': 'Inter',
  'font-weight': '400px',
  'line-height': '178%',
});

const StyledContainer = styled('div')({
  height: '30%',
  width: '100%',
  display: 'flex',
  padding: '80px 156px',
  'box-sizing': 'border-box',
  'align-items': 'center',
  'flex-shrink': 1,
  'flex-direction': 'column',
  'justify-content': 'space-between',
});

const StyledHeader = styled('h1')({
  color: 'rgba(33, 64, 50, 1)',
  'font-size': '24px',
  'text-align': 'center',
  'font-family': 'Roboto Mono',
  'font-weight': 'initial',
});

const StyledBenefitCard = styled('div')({
  width: '100%',
  display: 'flex',
  'justify-content': 'space-between',
  'box-sizing': 'border-box',
  'align-items': 'center',
  'flex-shrink': 1,
  'border-color': 'transparent',
});

const StyledCard = styled('div')({
  display: 'flex',
  'box-sizing': 'border-box',
  'align-items': 'flex-start',
  'flex-shrink': 1,
  'border-color': 'transparent',
  'flex-direction': 'column',
});

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
  width: '488px',
  'font-size': '32px',
  'text-align': 'left',
  'font-family': 'Roboto Mono',
  'font-weight': 'initial',
});

const StyledCardContent = styled('h3')({
  color: '#201F1F',
  width: '488px',
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

const Benefits = ({ id }) => (
  <StyledContainer>
    <StyledHeader id={id}>[Pingwire’s Benefits]</StyledHeader>
    <BenefitsRow>
      <BenefitColumn>
        <LineBreak size="small" />
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
        <LineBreak size="small" />
      </BenefitColumn>
      <BenefitColumn>
        <LineBreak size="small" />
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
        <LineBreak size="small" />
      </BenefitColumn>
      <BenefitColumn>
        <LineBreak size="small" />
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
        <LineBreak size="small" />
      </BenefitColumn>
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
      <StyledBenefitCard>
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

export default Benefits;

Benefits.propTypes = {
  id: PropTypes.string.isRequired,
};
