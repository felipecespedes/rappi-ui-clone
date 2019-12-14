import React from 'react';
import {
  HeaderContainer,
  UserAvatar,
  UserAdress,
  Cupon,
} from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <UserAvatar />
      <UserAdress>Cll 26 # 45 - 67</UserAdress>
      <Cupon>Cupon</Cupon>
    </HeaderContainer>
  );
};

export default Header;
