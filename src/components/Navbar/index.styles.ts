import styled, { css } from "styled-components";
import { animated } from "react-spring";
import { config } from 'react-awesome-styled-grid';
import Link from "next/link";

export const Nav = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #FFFFFF;
  z-index: 1;
  font-size: 1.4rem;
`;


export const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;

  & span {
    background: ${props => props.theme.colors.primary};
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

  & .open span:nth-child(2) {
      opacity: 0;
    }

  & .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  & .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`;

export const CollapseWrapper = styled(animated.div)`
  background: ${props => props.theme.colors.primary};
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

export const FlexContainer = styled.div`
  max-width: 88rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

export const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & li {
    display: inline-block;

    a {
      color: ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.fonts.gilroyMedium};
      border-bottom: 1px solid transparent;
      margin: 0 1.5rem;
      transition: all 300ms linear 0s;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.colors.primary};
        border-bottom: 1px solid ${props => props.theme.colors.primary};
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const NavLinksMobile = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
`;

export const NavLinkMobile = styled.li<{ active: boolean }>`
  transition: all 300ms linear 0s;

  & a {
    font-family: ${props => props.theme.fonts.gilroyMedium};
    font-size: 1.4rem;
    line-height: 2;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;

    ${props => props.active && css`
      font-family: ${props => props.theme.fonts.gilroyBold} !important;
      border-bottom: 1px solid #FFFFFF !important;
    `};

    &:hover {
      color: #FFFFFF;
      border-bottom: 1px solid #FFFFFF;
    };
  };
`

export const NavLink = styled.li<{active: boolean}>`
  display: inline-block;

  a {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.gilroyMedium};
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    ${props => props.active && css`
      font-family: ${props => props.theme.fonts.gilroyBold} !important;
      border-bottom: 1px solid ${props.theme.colors.primary} !important;
    `}

    &:hover {
      color: ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const BurgerWrapper = styled.div`
  margin: auto 0;

  ${props => config(props).media['sm']`
    display: none;
  `}
`;
