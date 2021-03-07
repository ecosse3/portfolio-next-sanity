import React from 'react';
import { Wrapper } from './index.styles';

interface IProps {
  handleNavbar: () => void;
  navbarState: boolean;
}

const BurgerMenu = ({ handleNavbar, navbarState }: IProps) => {
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={navbarState ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

export default BurgerMenu;
