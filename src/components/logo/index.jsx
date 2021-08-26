import React from "react";
import styled from "styled-components";
import GreenlandLogoImg from "../../assets/images/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top:20px;
  margin-left:140px;
`;

const LogoImg = styled.div`
  width: 70px;
  height: 70px;
  img {
    width: 100%;
    height: 100%;
  }
`;


export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={GreenlandLogoImg} alt=" logo" />
      </LogoImg>
     
    </LogoWrapper>
  );
}