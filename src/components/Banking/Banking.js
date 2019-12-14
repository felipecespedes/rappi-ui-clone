import React from 'react';
import {
  BankingContainer,
  BankingPay,
  BankingQR,
  BankingDetails,
  DetailsText,
  BankingQRImage,
} from './Banking.styles';

const Banking = () => {
  return (
    <BankingContainer>
      <BankingPay />
      <BankingQR>
        <BankingQRImage />
      </BankingQR>
      <BankingDetails>
        <DetailsText>Mi Dinero</DetailsText>
      </BankingDetails>
    </BankingContainer>
  );
};

export default Banking;
