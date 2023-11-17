import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import mockUsers, { addMockUser, User } from "../../data/Users";

export function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      if (signUpData.password1 !== signUpData.password2) {
        alert("Passwords do not match");
        return;
      } else {
        console.log("Passwords match");
      }

      const newUser: User = {
        id: 0,
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password1,
      };

      addMockUser(newUser);
      console.log("New user added: ", newUser);
      console.log(mockUsers);

      setSignUpData({
        name: "",
        email: "",
        password1: "",
        password2: "",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your full name"
            name="name"
            value={signUpData.name}
            onChange={handleChange}
          />
        </Form.Group>
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
        <Button type="submit" variant="primary">
          Create account
        </Button>
      </Form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </Container>
  );
}
