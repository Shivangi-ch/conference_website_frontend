
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";
const LocationContainer = styled(Element)`
  height: 400px;
 background-image:url("https://i.pinimg.com/736x/96/fd/24/96fd249a0ac056703ebe7d5a5465c483--city-lights-night-lights.jpg");
  align-items: center;
  
  background-position:center;

 
  
 

`;
export function LocationSection(props) {
    const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  
    return (
      <LocationContainer>
      <SectionTitle style={{marginLeft:'-750px',marginTop:"80px", fontSize: '40px' ,color: 'white',letterSpacing:'1px'}}> SUPPORTED <span style={{color:'red'}}>BY</span></SectionTitle>
       
    
      </LocationContainer>
    );
  }
  