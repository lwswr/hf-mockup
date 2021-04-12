import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { AboutUs } from "./AboutUs";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Planteria } from "./Planteria";
import { Restaurant } from "./Restaurant";

document.title = "Highfield Garden World";

const AppCon = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: url("/images/wisteria-background.jpg") no-repeat center fixed;
  background-size: cover;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
  background: rgb(81, 120, 130, 0.8);
  position: fixed;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  font-family: "Shippori Mincho", serif;
  padding: 1rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  background-image: linear-gradient(white, white);
  background-size: 0% 0.1em;
  background-position-y: 100%;
  background-position-x: 50%;
  background-repeat: no-repeat;
  transition: background-size 0.4s ease-in-out;
  text-decoration: none;
  transition: 0.7s;
  :hover {
    color: lightgrey;
  }
  :hover,
  :focus,
  :active {
    background-size: 100% 0.1rem;
  }
`;

const Title = styled.div`
  font-family: "Shippori Mincho", serif;
  font-size: 3rem;
  margin: 0 1.5rem;
  color: white;
  letter-spacing: 0.3rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 6rem;
`;

function App() {
  return (
    <AppCon>
      <Router>
        <Nav>
          <Title>
            <span style={{ fontSize: "4rem" }}>H</span>IGHFIELD
          </Title>
          <Links>
            <LinkText to="/">Home</LinkText>
            <LinkText to="/restaurant">The Restaurant</LinkText>
            <LinkText to="/planteria">Planteria</LinkText>
            <LinkText to="/about_us">About us</LinkText>
            <LinkText to="/contact">Contact</LinkText>
          </Links>
        </Nav>

        <Switch>
          <Route path="/restaurant">
            <Restaurant />
          </Route>
          <Route path="/planteria">
            <Planteria />
          </Route>
          <Route path="/about_us">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppCon>
  );
}

export default App;

// -- Features --
// landing page
// restaurant page
// planteria page
// decide where nav goes

// -- Bonus --
// Weather snippet
// Map snippet
