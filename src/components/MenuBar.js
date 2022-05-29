import React, { useRef } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Button from './Button';
import breakpoints from '../../contants/breakpoints';

const Frame = styled('div')`
  width: 100%;
  display: flex;
  @media (min-width: ${breakpoints.desktop}) {
    padding: 1.5rem 9.75rem;
  }
  padding: 1.5rem 5%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

const ButtonGroup = styled('div')`
  box-sizing: border-box;
  align-items: center;
  width: 20%;
  justify-content: space-between;
  flex-shrink: 1;
  border-color: transparent;
  display: none;
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
  }
`;

const DrawerContainer = styled('div')`
  display: flex;
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const SideBarContainer = styled('div')`
  width: 100%;
  align-items: end;
  display: flex;
  flex-direction: column;
`;

const SideBarHeader = styled('div')`
  width: 90%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 10%;
`;

const SideBar = styled('div')`
  max-width: 375px;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #214032;
  transition: 0.3s;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const SideBarFooter = styled('div')`
  width: 90%;
  justify-content: space-between;
  display: flex;
  margin: 20% 5% 0px 0px;
`;

const Text = styled('p')`
  color: #FFF;
  margin: 0;
  font-size: 20px;
  text-align: center;
  font-family: Roboto Mono;
  font-weight: 500px;
`;

const MenuBar = () => {
  const sideBarRef = useRef(null);
  const openNav = () => {
    sideBarRef.current.style.width = '100%';
  };
  const closeNav = () => {
    sideBarRef.current.style.width = '0';
  };
  return (
    <Frame>
      <StaticImage
        src="../images/Pingwire_logo.svg"
        alt="A dinosaur"
        placeholder="tracedSVG"
        width="150"
        height="32"
        layout="constrained"
      />
      <ButtonGroup>
        <Button as="a" href="https://app.pingwire.io/" variant="none" textColor="primary">
          Log In
        </Button>
        <Button as="a" href="mailto:sales@pingwire.io" variant="outlined" textColor="primary">
          Book demo
        </Button>
      </ButtonGroup>
      <DrawerContainer>
        <Button onClick={openNav}>
          <StaticImage
            src="../images/hamburger.svg"
            alt="A dinosaur"
            placeholder="tracedSVG"
          />
        </Button>
      </DrawerContainer>
      <SideBar ref={sideBarRef}>
        <SideBarContainer>
          <SideBarHeader>
            <Text>[Menu]</Text>
            <Button onClick={closeNav}>
              <StaticImage
                src="../images/Union.svg"
                alt="A dinosaur"
                placeholder="tracedSVG"
              />
            </Button>
          </SideBarHeader>
          <Button as="a" href="#benefits" onClick={closeNav}>
            <Text>
              Benefits
            </Text>
          </Button>
          <Button as="a" href="#capabilities" onClick={closeNav}>
            <Text>
              Capabilities
            </Text>
          </Button>
          <Button as="a" href="#onboarding" onClick={closeNav}>
            <Text>
              Onboarding
            </Text>
          </Button>
          <Button as="a" href="#aboutUs" onClick={closeNav}>
            <Text>
              About us
            </Text>
          </Button>
          <SideBarFooter>
            <Button as="a" href="https://app.pingwire.io/" variant="filled" textColor="white">
              Log In
            </Button>
            <Button as="a" href="mailto:sales@pingwire.io" variant="outlined" textColor="white">
              Book demo
            </Button>
          </SideBarFooter>
        </SideBarContainer>
      </SideBar>
    </Frame>
  );
};
export default MenuBar;
