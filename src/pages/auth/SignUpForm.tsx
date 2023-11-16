import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function SignUpForm() {
  return (
    <Container>
      <h2>Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter your email address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter password</Form.Label>
          <Form.Control type="text" placeholder="Enter a password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="text" placeholder="Confirm your password" />
        </Form.Group>
        <Button as="input" type="submit" value="Submit" />
      </Form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </Container>
  );
}
