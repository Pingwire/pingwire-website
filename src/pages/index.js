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
  <Page title="Pingwire: Next-Gen Solution for AML & CTF Compliance" metaDescription="Cutting-edge service for preventing financial crime. Achieve full compliance effortlessly with real-time transaction monitoring, seamless KYC, and more.">
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
