import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Button from './Button';
import LinkButton from './LinkButton';

import breakpoints from '../../contants/breakpoints';

const Frame = styled('header')`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: ${breakpoints.laptop}) {
    padding: 1.5rem 4rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding: 1.5rem 9.75rem;
  }
`;

const ButtonGroup = styled('div')`
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 1;
  border-color: transparent;
  display: none;
  gap: 2rem;

  @media (min-width: ${breakpoints.laptop}) {
    display: flex;
  }
`;

const DrawerContainer = styled('div')`
  display: flex;
  @media (min-width: ${breakpoints.laptop}) {
    display: none;
  }
`;

const SideBarContainer = styled('div')`
  width: 100%;
  box-sizing: border-box;
  align-items: end;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const SideBarHeader = styled('div')`
  width: 90%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 2rem;
  color: #FFF;
  font-size: 20px;
  align-items: center;
`;

const SideBar = styled('div')`
  max-width: 375px;
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #214032;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const SideBarFooter = styled('div')`
  width: 90%;
  justify-content: space-between;
  display: flex;
  margin-top: 3rem;
`;

const MenuLink = styled('a')`
  color: #FFF;
  margin: 0;
  font-size: 20px;
  text-align: center;
  font-family: Roboto Mono;
  line-height: 180%;
  text-decoration: none;
`;

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeNav = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Frame>
      <StaticImage
        src="../images/Pingwire_logo.svg"
        alt="A dinosaur"
        placeholder="tracedSVG"
        width={150}
        height={32}
        layout="constrained"
      />
      <ButtonGroup>
        <Button as="a" href="https://app.pingwire.io/" variant="none" textColor="primary">
          Log In
        </Button>
        <LinkButton to="/contact/" variant="outlined" textColor="primary">
          Contact Us
        </LinkButton>
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
      <SideBar isOpen={isOpen}>
        <SideBarContainer>
          <SideBarHeader>
            <span>[Menu]</span>
            <Button onClick={closeNav}>
              <StaticImage
                src="../images/Union.svg"
                alt="A dinosaur"
                placeholder="tracedSVG"
              />
            </Button>
          </SideBarHeader>
          <MenuLink href="#benefits" onClick={closeNav}>
            Benefits
          </MenuLink>
          <MenuLink href="#capabilities" onClick={closeNav}>
            Capabilities
          </MenuLink>
          <MenuLink href="#onboarding" onClick={closeNav}>
            Onboarding
          </MenuLink>
          <MenuLink href="#aboutUs" onClick={closeNav}>
            About us
          </MenuLink>
          <SideBarFooter>
            <Button as="a" href="https://app.pingwire.io/" variant="filled" textColor="white">
              Log In
            </Button>
            <LinkButton to="/contact/" variant="outlined" textColor="primary">
              Contact Us
            </LinkButton>
          </SideBarFooter>
        </SideBarContainer>
      </SideBar>
    </Frame>
  );
};
export default MenuBar;
