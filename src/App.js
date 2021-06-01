import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";
import { Page3 } from "./components/page3";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Page1">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Page2">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/page1">
          <Page1></Page1>
        </Route>
        <Route path="/page2">
          <Page2></Page2>
        </Route>
        <Route path="/page3">
          <Page3></Page3>
        </Route>
        <Route path="/">
          <Page1></Page1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
