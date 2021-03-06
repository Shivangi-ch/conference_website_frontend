import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import { DownArrow } from "../../components/downArrow";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UImg from "../../assets/images/Ajay-Kumar-Garg-Engineering-College-Ghaziabad.png";
import { Logo } from "../../components/logo";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
// import { Link } from "react-router-dom";
// import { Button } from "../../components/button";
// import BackgroundImg from "../../assets/pictures/company_team.jpg";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  
`;



// const BackgroundFilter = styled.div`
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(to right, #000000e1 , rgba(0, 105, 137, 0.90)), url("https://image.freepik.com/free-photo/tutor-college-student-group-sitting-desk-library-studying-reading-doing-homework_28283-1230.jpg") ;
//   background-repeat: no-repeat;
//   background-size: 100% 100%;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const MotivationalText = styled.h1`
  font-size: 20px;
  font-weight: 200;
  display:flex;
  align-items:center;
  margin-top:-120px;
  z-index:1;
  color: black;
  margin-left: 320px;
  
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
`;
const Extratext = styled.div`
  color: black;
  font-size:18px;
  margin-left:450px;
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };

  return (
    <Element name="topSection">
      <TopContainer>
        <Logo />
        <Navbar />
        <Marginer direction="vertical" margin="1.0em" />

          
       
            <Carousel showThumbs={false}>
              
                <div>
                    <img src={UImg}height="620px" />
                  
                </div>
                <div>
                    <img src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/5050/2018/4/26/Campus-View1.jpg" height="620px"/>
                    
                </div>
                <div>
                    <img src="https://images.static-collegedunia.com/public/college_data/images/appImage/1499925698mb02.jpg?tr=c-force" height="620px"/>
                    
                </div>
            </Carousel>
       
          {/* <MotivationalText>Future achievers study from IITians Online</MotivationalText>
          <Marginer direction="vertical" margin="2.5em" />
          <Extratext><i>Your Learning Journey Matters to Us</i></Extratext> */}  

          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
         
         
      </TopContainer>
    </Element>
  );
}
