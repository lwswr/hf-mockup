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
  background: #f7f4f2;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #517882;
  position: fixed;
  z-index: 10;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  font-family: "Shippori Mincho", serif;
  padding: 1rem;

  color: white;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  background-image: linear-gradient(white, white);
  background-size: 0% 0.05em;
  background-position-y: 100%;
  background-position-x: 50%;
  background-repeat: no-repeat;
  transition: background-size 0.4s ease-in-out;
  text-decoration: none;
  transition: 0.4s;
  :hover {
    color: lightgrey;
  }
  :hover,
  :focus,
  :active {
    background-size: 100% 0.05em;
  }
`;

const Content = styled.div`
  margin-top: 6rem;
  height: 200%;
  width: 100vw;
  align-self: flex-end;
  position: absolute;
`;

function App() {
  return (
    <AppCon>
      <Router>
        <Nav>
          <LinkText to="/">Home</LinkText>
          <LinkText to="/restaurant">The Restaurant</LinkText>
          <LinkText to="/planteria">Planteria</LinkText>
          <LinkText to="/about_us">About us</LinkText>
          <LinkText to="/contact">Contact</LinkText>
        </Nav>
        <Content>
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
        </Content>
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
