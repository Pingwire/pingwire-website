import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled('a')`
  cursor: pointer;
  opacity: 0.70;
  color: rgba(33,64,50,1);
  &:hover {
    opacity: 1;
  }
`;

const TextLink = ({
  href, children,
}) => (
  <StyledLink href={href}>
    {children}
  </StyledLink>
);

TextLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TextLink.defaultProps = {
  href: '',
};

export default TextLink;
