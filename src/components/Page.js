import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from './Footer';

const StyledPage = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    font-family: Arial, sans-serif;
  }
`;

const Page = ({ children }) => (
  <StyledPage>
    <GlobalStyle />
    {children}
    <Footer />
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
