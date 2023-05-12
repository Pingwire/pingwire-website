import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Message = styled.h1`
  margin-bottom: 20px;
  color: rgba(33, 64, 50, 1);
  text-align: center;
`;

const ThankYouPage = () => (
  <Page title="Thank you | Pingwire" metaDescription="Thank you" footer={false} fullWidth>
    <Container>
      <Message>Thank you for your submission!</Message>
      <Button to="/" variant="filled" size="big">Go Back Home</Button>
    </Container>
  </Page>
);

export default ThankYouPage;
