import { useState } from "react";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <h2>Sign Up</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email address"
            name="email"
            value={signUpData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a password"
            name="password1"
            value={signUpData.password1}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            name="password2"
            value={signUpData.password2}
            onChange={handleChange}
          />
        </Form.Group>
        <Button as="input" type="submit" value="Submit" />
      </Form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </Container>
  );
}
