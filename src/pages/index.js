import React from 'react';
import styled from 'styled-components';

const StyledHero = styled('div')`
  background-color: green;
`;

const Home = () => (<StyledHero>Hello world!</StyledHero>);

export default Home;
