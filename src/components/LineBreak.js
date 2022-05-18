import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLine = styled('hr')`
width: ${(props) => (props.size === 'full' ? '100%' : '296px')};
color: rgba(33, 64, 50, 0.25);
border-top-width: 0px;
margin: 0;
`;

const LineBreak = ({ size }) => (
  <StyledLine size={size} />
);

LineBreak.propTypes = {
  size: PropTypes.string,
};

LineBreak.defaultProps = {
  size: '',
};

export default LineBreak;
