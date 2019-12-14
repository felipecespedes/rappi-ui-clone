import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`;

export const UserAvatar = styled.View`
  width: 30;
  height: 30;
  background-color: #ff5c49;
  border-radius: 50px;
`;

export const UserAdress = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 16px;
`;

export const Cupon = styled.Text`
  font-size: 14px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;
