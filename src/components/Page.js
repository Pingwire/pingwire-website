import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import LineBreak from './LineBreak';
import Footer from './Footer';

const Container = styled('div')`
  display: flex;
  justify-content: center;
`;

const StyledPage = styled('div')`
  display: flex;
  max-width: 1440px;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    font-family: Roboto Mono, monospace;
  }
`;

const Page = ({ children }) => (
  <Container>
    <StyledPage>
      <Helmet htmlAttributes={{ lang: 'en-GB' }}>
        <meta charSet="utf-8" />
        <title>Pingwire</title>
        <meta
          name="description"
          content="Money laundering and terrorism financing detection system. Powered by complex AI model using PSD2 data for advanced insights"
        />
      </Helmet>
      <GlobalStyle />
      {children}
      <LineBreak size="full" />
      <Footer />
    </StyledPage>
  </Container>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
