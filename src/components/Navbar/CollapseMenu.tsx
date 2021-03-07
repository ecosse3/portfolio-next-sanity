import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { useSpring } from 'react-spring';
import { CollapseWrapper, NavLinkMobile, NavLinksMobile } from './index.styles';

interface IProps {
  navbarState: boolean;
}

const CollapseMenu = ({ navbarState }: IProps) => {
  const router = useRouter();
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`)
        }}>
        <NavLinksMobile>
          <NavLinkMobile active={router.pathname === '/'}>
            <Link href="/">Home</Link>
          </NavLinkMobile>
          <NavLinkMobile active={router.pathname === '/'}>
            <Link href="/">About me</Link>
          </NavLinkMobile>
          <NavLinkMobile active={router.pathname === '/'}>
            <Link href="/">Projects</Link>
          </NavLinkMobile>
          <NavLinkMobile active={router.pathname === '/'}>
            <Link href="/">Blog</Link>
          </NavLinkMobile>
          <NavLinkMobile active={router.pathname === '/'}>
            <Link href="/">Contact</Link>
          </NavLinkMobile>
        </NavLinksMobile>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
