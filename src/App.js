import logo from "./logo.svg";
import "./App.css";
import { Accordion, Button, Card } from "react-bootstrap";
import { Member1 } from "./components/login";
import { Member2 } from "./components/registration";
import { Bootstrap1 } from "./components/reactbootStrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Member1 />
        </Route>

        <Route path="/page1" exact>
          <Member1 />
        </Route>

        <Route path="/page2" exact>
          <Member2 />
        </Route>

        <Route path="/page3" exact>
          <Bootstrap1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
