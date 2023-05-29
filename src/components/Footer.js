import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import breakpoints from '../../contants/breakpoints';

const StyledCopyRightText = styled('p')`
  color: rgba(42, 42, 42, 1);
  margin: 0;
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

const StyledFooter = styled('footer')`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-shrink: 1;
  flex-wrap: wrap;
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

const Frame = styled('div')`
  margin-bottom: 1rem;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  width: 100%;
  flex-direction: column;
`;

const GroupItems = styled('div')`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
  }
`;

const InPageNavigationGroup = styled('div')`
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 1;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;

  @media (min-width: ${breakpoints.desktop}) {
    gap: 2rem;
  }
`;

const FooterLink = styled(Link)`
  color: #214032;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
`;

const Footer = () => (
  <StyledFooter>
    <Frame>
      <GroupItems>
        <Link to="/">
          <StaticImage
            src="../images/Pingwire_logo.svg"
            alt="A dinosaur"
            placeholder="tracedSVG"
          />
        </Link>
        <InPageNavigationGroup>
          <FooterLink to="/#benefits">
            Benefits
          </FooterLink>
          <FooterLink to="/#capabilities">
            Capabilities
          </FooterLink>
          <FooterLink to="/#onboarding">
            Onboarding
          </FooterLink>
          <FooterLink to="/#aboutUs">
            About us
          </FooterLink>
        </InPageNavigationGroup>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <StaticImage
            src="../images/linkedin.svg"
            alt="A dinosaur"
            placeholder="tracedSVG"
          />
        </a>
      </GroupItems>
    </Frame>
    <StyledCopyRightText>Copyright &copy;{(new Date()).getFullYear()} Pingwire</StyledCopyRightText>
  </StyledFooter>
);

export default Footer;
