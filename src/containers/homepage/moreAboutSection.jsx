import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import Fade from 'react-reveal/Fade';


const MoreAboutContainer = styled(Element)`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background-color:#f3f3f3;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutText = styled.p`
  font-size: 19px;
  text-shadow:  black;
 
 
  
  color: grey;
 
  line-height: 1.7;
  @media screen and (max-width: 480px) {
font-size:13px;

  
  }
`;

const AboutImg = styled.img`
  width: 700px;
  height: 400px;
  margin-top: 2.5em;
  margin-left: 2em;
  overflow: hidden;
  
  transform: translatey(0px);
  -webkit-filter: drop-shadow(5px 5px 15px #6adfb2);
  filter: drop-shadow(5px 5px 15px #6adfb2);
  animation: float 3s ease-in-out infinite;
  @keyframes float {
    0% {
      filter: drop-shadow(5px 5px 15px #6adfb2));
      transform: translatey(0px);
    }
    50% {
      filter: drop-shadow(5px 5px 15px #6adfb2);
      transform: translatey(-20px);
    }
    100% {
      filter: drop-shadow(5px 5px 15px #6adfb2);
      transform: translatey(0px);
    }
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
     <Fade left>
      <SectionTitle style={{ fontSize: '40px' ,color: '#292929',marginLeft:'-650px',letterSpacing:'1px',marginTop:'70px'}}>ABOUT <span style={{color:'red'}}>CONFERENCE</span></SectionTitle>
      </Fade>
      <AboutContainer>
      <Fade right>
        <AboutText>
          
        International Conference on Innovative Computing and Communication (ICICC 2022) is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. Another goal is to promote the transformation of fundamental research into institutional and industrialized research and to convert applied exploration into real time application. Overall the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions from India and abroad for promoting research. ICICC- 2022 will be held at Shaheed Sukhdev College of Business Studies, University of Delhi, New Delhi in association with National Institute of Technology, Patna All the accepted papers (after double blinded peer review) are published in Springer(Approval Pending) AISC series and extended selected papers will be published in the special issues of SCI/SCOPUS/WoS/DBLP/ACM indexed Journals.
     </AboutText>
     </Fade>
 
      </AboutContainer>
    </MoreAboutContainer>
  );
}
