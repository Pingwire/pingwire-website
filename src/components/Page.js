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
  max-width: ${(props) => {
    if (props.fullWidth) return 'none';
    return '1440px';
  }};
  width: ${(props) => {
    if (props.fullWidth) return '99.9%';
    return 'none';
  }};
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

const Page = ({
  children,
  footer = true,
  fullWidth,
  title,
  metaDescription,
}) => (
  <Container>
    <StyledPage fullWidth={fullWidth}>
      <Helmet htmlAttributes={{ lang: 'en-GB' }}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content={metaDescription}
        />
      </Helmet>
      <GlobalStyle />
      {children}
      {footer && (
      <>
        <LineBreak size="full" />
        <Footer />
      </>
      )}
    </StyledPage>
  </Container>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
  fullWidth: PropTypes.bool,
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
};

Page.defaultProps = {
  footer: true,
  fullWidth: false,
};

export default Page;
