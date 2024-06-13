// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  position: stick ;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const FooterText = styled.p`
  margin: 0;
  color: #6c757d;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Desafio Técnico - Julia Helena de Santana</FooterText>
    </FooterContainer>
  );
};

export default Footer;
