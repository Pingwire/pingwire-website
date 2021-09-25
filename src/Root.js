import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
  }
`;

const Root = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
);

Root.propTypes = {
  element: PropTypes.node.isRequired,
};

export default Root;
