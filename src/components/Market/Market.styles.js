import styled from 'styled-components/native';

export const MarketContainer = styled.View`
  display: flex;
  padding: 10px;
`;

export const MainProducts = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 15px;
`;

export const MainProductContainer = styled.View`
  width: 50%;
  padding: 5px;
`;

export const MainProductContent = styled.View`
  height: 120px;
  border-radius: 10px;
`;

export const MainProductDescription = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  width: 125px;
  margin: 0 10px 10px;
  position: absolute;
  bottom: 0;
`;

export const MainProductImage = styled.View`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 0;
  border-radius: 50px;
  background-color: #eee;
`;

export const ScrollableSection = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SubProductContainer = styled.View`
  width: 25%;
  padding: 10px;
`;

export const SubProductContent = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SubProductImage = styled.View`
  width: 100%;
  height: 80px;
  border-radius: 10px;
`;

export const SubProductDescription = styled.Text`
  font-size: 12px;
`;
