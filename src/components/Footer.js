import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled('footer')`
  padding: 2rem 4rem;
  margin-top: auto;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    Copyright &copy;{(new Date()).getFullYear()} Pingwire
  </StyledFooter>
);

export default Footer;
