import React, { useState } from 'react';
import { useSpring, config } from 'react-spring';
import Image from 'next/image';

import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';
import { BurgerWrapper, FlexContainer, Nav, NavLink, NavLinks } from './index.styles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = () => setNavbarOpen((state) => !state);
  const router = useRouter();

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)'
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <>
      <Nav style={barAnimation}>
        <FlexContainer>
          <div style={{ cursor: 'pointer' }}>
            <Link href="/">
              <Image src="/logo/slogan.svg" width={80} height={80} />
            </Link>
          </div>
          <NavLinks style={linkAnimation}>
            <NavLink active={router.pathname === '/'}>
              <Link href="/">Home</Link>
            </NavLink>
            <NavLink active={router.pathname === '/about'}>
              <Link href="/">About me</Link>
            </NavLink>
            <NavLink active={router.pathname === '/about'}>
              <Link href="/">Projects</Link>
            </NavLink>
            <NavLink active={router.pathname === '/posts/[slug]'}>
              <Link href="/posts">Blog</Link>
            </NavLink>
            <NavLink active={router.pathname === '/contact'}>
              <Link href="/">Contact</Link>
            </NavLink>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu navbarState={navbarOpen} handleNavbar={handleNavbar} />
          </BurgerWrapper>
        </FlexContainer>
      </Nav>
      <CollapseMenu navbarState={navbarOpen} />
    </>
  );
};

export default Navbar;
