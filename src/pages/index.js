import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const StyledPage = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Home = () => (
  <StyledPage>
    <Hero />
    <Footer />
  </StyledPage>
);

export default Home;
