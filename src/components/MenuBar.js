import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Button from './Button';

const Frame = styled('div')`
  width: 100%;
  display: flex;
  padding: 24px 156px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

const ButtonGroup = styled('div')`
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  width: 230px;
  justify-content: space-between;
  flex-shrink: 1;
  border-color: transparent;
`;

const MenuBar = () => (
  <Frame>
    <StaticImage
      src="../images/Pingwire_logo.svg"
      alt="A dinosaur"
      placeholder="tracedSVG"
      width="150"
      height="32"
    />
    <ButtonGroup>
      <Button as="a" href="https://app.pingwire.io/" variant="none">
        Log In
      </Button>
      <Button as="a" href="mailto:sales@pingwire.io" variant="outlined">
        Book demo
      </Button>
    </ButtonGroup>
  </Frame>
);
export default MenuBar;
