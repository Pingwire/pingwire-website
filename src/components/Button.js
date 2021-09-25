import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled('button')`
  text-decoration: none;
  color: white;
  padding: 1rem 2rem;
  background-color: #00C390;
  align-self: flex-start;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #00916B;
  }
`;

const Button = ({ as, href, children }) => (
  <StyledButton as={as} href={href}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  as: undefined,
  href: '',
};

export default Button;
