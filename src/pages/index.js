import React from 'react';

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
    <MenuBar />
    <Hero />
    <Benefits id="benefits" />
    <Challenges />
    <Capabilities id="capabilities" />
    <Onboarding id="onboarding" />
    <AboutUs id="aboutUs" />
    <Contact />
  </Page>
);

export default Home;
