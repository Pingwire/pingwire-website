import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import Footer from './Footer';

const StyledPage = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow: auto
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    font-family: Roboto Mono, monospace;
  }
`;

const Page = ({ children }) => (
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
    <Footer />
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
