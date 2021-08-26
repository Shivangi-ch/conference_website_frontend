import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";

import Gallery from 'react-grid-gallery';
const IMAGES =
[{
        src: "https://lh6.googleusercontent.com/UiVk1w0sswyVXpVHbGJ157aPW7JPI5bB1cw2ISKrDW9n3YB9OduznVaHzlpeAaHzR2iQzlBI_M3TolQhiTFYEjgse7YU5XTjK1eDXWp--MA=w1280",
        thumbnail: "https://lh6.googleusercontent.com/UiVk1w0sswyVXpVHbGJ157aPW7JPI5bB1cw2ISKrDW9n3YB9OduznVaHzlpeAaHzR2iQzlBI_M3TolQhiTFYEjgse7YU5XTjK1eDXWp--MA=w1280",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        tags: [{value: "Dr. Yang Xiao", title: "Dr. Yang Xiao"}, {value: "IT Prof.", title: "IT Prof."}],
        caption: "Dr. Michail (Michalis) Matthaiou  "
},
{
        src: "http://yangxiao.cs.ua.edu/images/1709016_BH_177_Yang_Xiao-800x1000.jpg",
        thumbnail: "http://yangxiao.cs.ua.edu/images/1709016_BH_177_Yang_Xiao-800x1000.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        tags: [{value: "Dr. Yang Xiao", title: "Dr. Yang Xiao"}, {value: "IT Prof.", title: "IT Prof."}],
        caption: "Dr. Yang Xiao"
        

       
},

{
        src: "http://www.micc.unifi.it/berretti/assets/images/stefano-conf1-400x266.png",
        thumbnail: "http://www.micc.unifi.it/berretti/assets/images/stefano-conf1-400x266.png",
        tags: [{value: "Dr. Yang Xiao", title: "Dr. Yang Xiao"}, {value: "IT Prof.", title: "IT Prof."}],
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Dr. Yang Xiao"

}]
const ServicesContainer = styled(Element)`
 margin-top:400px;
 height:100px;

 
`;

const SectionTitle = styled(Element)`
 margin-top:-350px;
 margin-left:150px;
 font-size:30px;
 font-weight:bold;
`;
const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%"
};

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle style={{ fontSize: '40px' ,color: '#292929',letterSpacing:'1px'}}>KEYNOTE <span style={{color:'red'}}>SPEAKERS</span></SectionTitle> 
      <Gallery  images={IMAGES} margin={74} />
    </ServicesContainer>
  );
}

