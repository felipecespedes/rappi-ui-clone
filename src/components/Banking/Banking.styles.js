import styled from 'styled-components/native';

export const BankingContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  elevation: 3;
  border: 1px solid #eee;
  margin: 10px 10px;
  border-radius: 10px;
`;

export const BankingPay = styled.View`
  height: 30px;
  width: 80px;
  background-color: #ff5c49;
  border-radius: 5px;
`;

export const BankingQR = styled.TouchableOpacity``;

export const BankingQRImage = styled.View`
  width: 50px;
  height: 50px;
  background-color: #ff5c49;
  border-radius: 50px;
`;

export const BankingDetails = styled.View`
  width: 80px;
`;

export const DetailsText = styled.Text`
  text-align: right;
`;
