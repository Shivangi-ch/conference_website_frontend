import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
  width: 350px;
  height: 430px;
  background-color: white;
 
 

  margin: 5px 0;
  position: relative;
  padding: 10px 1.2em;
`;



const ReviewText = styled.p`
  font-size: 14px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;

// const Line = styled.span`
//   min-width: 100%;
//   min-height: 1px;
//   margin-bottom: 1em;
//   background-color: #cdcdcd;
//   display: flex;
// `;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 60px;
  height: 240px;
 
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 15px;
  color: #000;
`;

export function ReviewCard(props) {
  const { reviewText, username, userImgUrl } = props;

  return (
    <CardContainer>
      
        
      
      <Marginer direction="vertical" margin="1em" />
      <ReviewText>{reviewText}</ReviewText>
      
    
      <UserDetails>
        <UserImg src={userImgUrl} />
        <Username>{username}</Username>
      </UserDetails>
    </CardContainer>
  );
}
