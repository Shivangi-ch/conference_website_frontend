import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
// import { Navbar } from "../../components/navbar";
import { MoreAboutSection } from "./moreAboutSection";
import { ReviewsSection } from "./reviewsSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";
import { SupportedbySection } from "./supportedby";
import { LocationSection } from "./location";
import Fade from 'react-reveal/Fade';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      
      <TopSection />
      
          <MoreAboutSection />
        
      <Fade left>
      <ServicesSection />
       </Fade>
      
      <SupportedbySection />
      
      <LocationSection />
      <ReviewsSection />
      
     
      <Footer />
    </PageContainer>
  );
}
