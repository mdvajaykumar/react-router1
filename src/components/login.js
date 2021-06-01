import { Button } from "react-bootstrap";

export function Member1() {
  return (
    <div>
      <div
        class="bg-primary d-flex justify-content-center"
        style={{ height: "40px" }}
      >
        login module
      </div>
      <div className="m-2">
        <input
          type="text"
          placeholder="Enter your username"
          className="form-control"
        />
      </div>
      <div className="m-2">
        <input
          type="text"
          placeholder="Enter your password"
          className="form-control"
        />
      </div>
      <div className="text-center mb-2">
        <Button>Login</Button>
      </div>
    </div>
  );
}
