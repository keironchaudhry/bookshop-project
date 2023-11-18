import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password1: "",
  });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      setLoginData({
        email: "",
        password1: "",
      });

      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter your email address"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password1"
            value={loginData.password1}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
      <p>
        New here? <Link to="/signup">Create your account now!</Link>
      </p>
    </Container>
  );
}
