import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import MenuBar from '../components/MenuBar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Challenges from '../components/Challanges';
import Capabilities from '../components/Capabilities';
import Onboarding from '../components/Onboarding';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';

const Home = () => (
  <Page>
    <Desktop>
      <MenuBar />
      <Hero />
      <Benefits id="benefits" />
      <Challenges />
      <Capabilities id="capabilities" />
      <Onboarding id="onboarding" />
      <AboutUs id="aboutUs" />
      <Contact />
    </Desktop>
  </Page>
);

export default Home;

const Desktop = styled('div')({
  height: '7200px',
  display: 'flex',
  'flex-direction': 'column',
  'max-width': '1440px',
  overflow: 'hidden',
  position: 'relative',
  'box-sizing': 'border-box',
  'align-items': 'flex-start',
  'border-color': 'transparent',
  'background-color': 'rgba(255, 255, 255, 1)',
});
