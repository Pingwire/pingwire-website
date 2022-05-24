import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled('button')`
  display: flex;
  padding: ${(props) => (props.size === 'big' ? '16px 32px' : '8px 16px')}; 
  position: relative;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: ${(props) => {
    if (props.variant === 'outlined') {
      if (props.textColor === 'white') return 'white';
      return 'rgba(33, 64, 50, 1)';
    }
    return 'transparent';
  }};
  background-color: ${(props) => {
    if (props.variant === 'filled') {
      if (props.backgroundColor === 'primary') return 'rgba(33, 64, 50, 1)';
      if (props.backgroundColor === 'white') return '#FFFFFF';
      return 'rgba(33, 64, 50, 1)';
    }
    return 'transparent';
  }};
  border-style: ${(props) => (props.variant === 'outlined' ? 'solid' : 'none')};
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  text-decoration: none;
`;

const Text = styled('i')`
  color: ${(props) => {
    if (props.textColor === 'primary') return 'rgba(33, 64, 50, 1)';
    if (props.textColor === 'white') return '#FFFFFF';
    return '#FFFFFF';
  }};
  height: auto;
  font-size: ${(props) => (props.size === 'big' ? '18px' : '16px')}; ;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 700px;
  line-height: 163%;
  font-stretch: normal;
  text-decoration: none;
`;

const Button = ({
  as, href, children, variant, size, backgroundColor, textColor, onClick,
}) => (
  <StyledButton
    onClick={onClick}
    variant={variant}
    as={as}
    href={href}
    size={size}
    backgroundColor={backgroundColor}
    textColor={textColor}
  >
    <Text textColor={textColor} variant={variant} size={size}>{children}</Text>
  </StyledButton>
);

Button.propTypes = {
  as: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  as: undefined,
  href: '',
  variant: '',
  size: '',
  backgroundColor: undefined,
  textColor: undefined,
  onClick: undefined,
};

export default Button;
