import { Button } from "react-bootstrap";

export function Member2() {
  return (
    <div>
      <div className="bg-secondary text-center text-primary">
        Registration Form
      </div>
      <div className="m-4">
        <span className="m-2 text-dark">Name</span>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div className="m-1">
        <span className="m-2 text-dark">Password</span>
        <input type="text" placeholder="Enter your password" />
      </div>
      <div className="m-4">
        <span className="m-2 text-dark">Email</span>
        <input type="text" placeholder="Enter your Email" />
      </div>
      <div className="m-1">
        <span className="m-2 text-dark">Mobile</span>
        <input type="text" placeholder="Enter your mobileno" />
      </div>
      <Button className="form-control m-2">Register</Button>
    </div>
  );
}
