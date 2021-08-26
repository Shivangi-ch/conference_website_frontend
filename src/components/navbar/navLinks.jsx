import React from "react";
import styled from "styled-components";
// import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import { Link } from "react-router-dom";

// import { MoreAboutSection } from "../../containers/homepage/moreAboutSection";
// import { ReviewsSection } from "../containers/homepage/reviewsSection"
// import { ServicesSection } from "../containers/homepage/servicesSection";
// import { TopSection } from "../containers/homepage/topSection";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left:140px;


`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.4em;
  color:grey;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing:1px;
  // font-family:'sans serif';
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 1px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-bottom: 3px solid red;
    color:red;
   
  }
`;

// const Link = styled.a`
//   text-decoration: none;
//   color: inherit;
//   font-size: inherit;
// `;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        {/* <BrowserRouter> */}
          {/* <Switch> */}
            {/* <Route path="/" exact> */}
              <LinkItem>
                <Link type="button" to="/home" style={{ textDecoration: 'none' ,color: 'grey'}}>Home</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/about" style={{ textDecoration: 'none' ,color: 'grey'}}>About</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/tutors" style={{ textDecoration: 'none' ,color: 'grey'}}>Special Sessions</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/courses" style={{ textDecoration: 'none' ,color: 'grey'}}>Workshops</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/contact" style={{ textDecoration: 'none' ,color: 'grey'}}>Registrations</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/contact" style={{ textDecoration: 'none' ,color: 'grey'}}>Sponsorship</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/contact" style={{ textDecoration: 'none' ,color: 'grey'}}>Publications</Link>
              </LinkItem>
              <LinkItem>
                <Link type="button" to="/contact" style={{ textDecoration: 'none' ,color: 'grey'}}>Committee</Link>
              </LinkItem>
            

            {/* </Route> */}

            {/* <Route path="/about">
              <MoreAboutSection/>
            </Route>
            <Route path="/tutors">
              <MoreAboutSection/>
            </Route>
            <Route path="/courses">
              <MoreAboutSection/>
            </Route>
            <Route path="/contact">
              <MoreAboutSection/>
            </Route> */}
          {/* </Switch> */}
        {/* </BrowserRouter> */}

        {/*  */}

        {/* <LinkItem>
          <Link >Home</Link>
        </LinkItem>
        <LinkItem>
          <Link to="/about">About us</Link>
        </LinkItem>
        <LinkItem>
          <Link >Our Tutors</Link>
        </LinkItem>
        <LinkItem>
          <Link >Buy a Course</Link>
        </LinkItem>
        <LinkItem>
          <Link >Contact Us</Link>
        </LinkItem> */}
        
      </LinksWrapper>
    </NavLinksContainer>
  );
}