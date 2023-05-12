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
import LineBreak from '../components/LineBreak';

const Home = () => (
  <Page title="Pingwire" metaDescription="Money laundering and terrorism financing detection system. Powered by complex AI model using PSD2 data for advanced insights">
    <MenuBar />
    <Hero />
    <Benefits id="benefits" />
    <LineBreak size="full" />
    <Challenges />
    <LineBreak size="full" />
    <Capabilities id="capabilities" />
    <Onboarding id="onboarding" />
    <AboutUs id="aboutUs" />
    <Contact />
  </Page>
);

export default Home;
