import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Page from '../components/Page';
import Button from '../components/Button';

const StyledSection = styled('section')`
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  ${(props) => (props.background ? 'background-color: rgba(209, 237, 221, 0.4);' : '')}
`;

const StyledParagraph = styled('p')`
  font-size: 1.125rem;
  line-height: 1.4;
  text-align: center;
  max-width: 45rem;
  margin-left: auto;
  margin-right: auto;
`;

const StyledSubHeadline = styled('h2')`
  color: #00C390;
  text-align: center;
`;

const StyledFlexBox = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Home = () => (
  <Page>
    <Hero />
    <StyledSection>
      <StyledSubHeadline>Pingwire&apos;s Solution</StyledSubHeadline>
      <StyledParagraph>Pingwire&apos;s anti money laundering and counter terrorism financing (&ldquo;AML/CTF&rdquo;) solution supports a holistic and risk based approach in a flexible way. The solution meets today&apos;s complex regulatory requirements and any legal standards that clients may have, based on conducted risk assessment.</StyledParagraph>
      <StyledParagraph>The solution supports both know your customer (&ldquo;KYC&rdquo;) and transaction monitoring. Legal standard in KYC process and transaction monitoring is configured by data source selection and Ping-triggers in the analysis engine. Compliance workflows are efficiently handled with ping alerts, case management system and reporting tools.</StyledParagraph>
    </StyledSection>
    <StyledSection background>
      <StyledSubHeadline>Tailored for your needs</StyledSubHeadline>
      <StyledParagraph>Pingwire&apos;s KYC Support together with Pingwire&apos;s Transaction Monitoring provides the complete compliance system for anti money laundering and counter terrorism financing surveillance. The solutions can also be selected separately. Case management through API or web login is included in either service.</StyledParagraph>
      <StyledParagraph>A strength in the solution that differentiates Pingwire from other providers is the capacity to process high volumes of PSD2 data in real time on an individual as well as aggregated basis to identify money laundering and terrorism financing (&ldquo;ML/TF&rdquo;) risks.</StyledParagraph>
      <StyledFlexBox>
        <Button as="a" href="mailto:sales@pingwire.io">Contact Sales</Button>
      </StyledFlexBox>
    </StyledSection>
  </Page>
);

export default Home;
