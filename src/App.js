import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1 className="bg-primary text-center">React bootstrap very powerful</h1>

      {[1, 2, 3, 4, 5, 6].map((index, item) => (
        <div className="m-2">
          {" "}
          <Button
            variant="secondary"
            className="text-center justify-content-center"
          >
            verify
          </Button>
        </div>
      ))}
    </div>
  );
}

export default App;
