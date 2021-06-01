import logo from "./logo.svg";
import "./App.css";
import { Accordion, Button, Card } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1>helloworld</h1>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default App;
