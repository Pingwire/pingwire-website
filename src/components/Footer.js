import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import LineBreak from './LineBreak';
import Button from './Button';

const StyledCopyRightText = styled('text')`
  color: rgba(42, 42, 42, 1);
  width: 168px;
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Inter;
  font-weight: 700px;
  line-height: 16px;
  font-stretch: normal;
  text-decoration: none;
`;

const StyledFooter = styled('div')`
  width: 80%;
  display: flex;
  padding: 0 0 32px 0;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  flex-direction: column;
`;

const Frame = styled('div')`
  height: 36px;
  margin: 10px 0 40px 0;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: transparent;
`;

const GruopItems = styled('div')`
  width: 1128px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  justify-content: space-between;
`;

const InPageNavigationGroup = styled('div')`
  display: flex;
  left: -7%;
  position: relative;
  width: 55%;
  box-sizing: border-box;
  flex-shrink: 1;
  justify-content: space-between;
`;

const Text = styled('text')({
  color: '#214032',
  'font-size': '20px',
  'text-align': 'center',
  'font-family': 'Roboto Mono',
  'font-weight': '500px',
});

const Footer = () => (
  <StyledFooter>
    <LineBreak size="full" />
    <Frame>
      <GruopItems>
        <StaticImage
          src="../images/Pingwire_logo.svg"
          alt="A dinosaur"
          placeholder="tracedSVG"
        />
        <InPageNavigationGroup>
          <Button as="a" href="#benefits">
            <Text>
              Benefits
            </Text>
          </Button>
          <Button as="a" href="#capabilities">
            <Text>
              Capabilities
            </Text>
          </Button>
          <Button as="a" href="#onboarding">
            <Text>
              Onboarding
            </Text>
          </Button>
          <Button as="a" href="#aboutUs">
            <Text>
              About us
            </Text>
          </Button>
        </InPageNavigationGroup>
        <Button>
          <StaticImage
            src="../images/linkedin.svg"
            alt="A dinosaur"
            placeholder="tracedSVG"
          />
        </Button>
      </GruopItems>
    </Frame>
    <StyledCopyRightText>Copyright &copy;{(new Date()).getFullYear()} Pingwire</StyledCopyRightText>
  </StyledFooter>
);

export default Footer;
