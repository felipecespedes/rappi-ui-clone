import styled from 'styled-components/native';

export const DrawerContainer = styled.View`
  background-color: #eee;
  display: flex;
  flex: 1;
  padding: 0 0 10px;
`;

export const DrawerHeader = styled.View`
  padding: 80px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DrawerHeaderGroup = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Greeting = styled.Text`
  font-size: 22px;
`;

export const PersonName = styled.Text`
  font-size: 35px;
  font-weight: bold;
`;

export const Logo = styled.View`
  height: 100px;
  width: 100px;
  background-color: #ff5c49;
  border-radius: 50px;
  border-color: #eee;
  border-width: 1px;
`;

export const QuickMenuContainer = styled.View`
  padding: 0 10px;
  margin: 0 0 20px;
  elevation: 3;
`;

export const QuickMenuContent = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  elevation: 3;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 5px;
`;

export const QuickMenu = styled.View`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuickMenuIcon = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background-color: #ddd;
`;

export const QuickMenuDescription = styled.Text`
  font-size: 14px;
  text-align: center;
`;

export const Ad = styled.View`
  border-radius: 10px;
  margin: 10px 10px 0;
`;

export const MenuContainer = styled.View`
  background-color: #fff;
  padding: 0 10px;
  margin: 10px 0 0;
  display: flex;
  flex-direction: column;
`;

export const MenuTitleContainer = styled.Text`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

export const MenuTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const MenuItem = styled.View`
  padding: 20px 20px 20px 0;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuItemDescription = styled.Text`
  font-size: 16px;
  flex: 1;
`;

export const MenuItemIcon = styled.View`
  height: 20px;
  width: 20px;
  background-color: #ddd;
  margin: 0 10px 0;
  border-radius: 50px;
`;

export const AppVersion = styled.Text`
  font-size: 12px;
  padding: 10px 0 0 10px;
  color: #999;
`;

export const MenuItemAction = styled.View`
`;
