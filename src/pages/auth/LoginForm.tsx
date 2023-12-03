import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import mockUsers from "../../data/Users";
import { useCurrentUser } from "../../context/CurrentUserContext";

export function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const { setCurrentUser } = useCurrentUser();

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
      const matchedUser = mockUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        console.log("Login successful!");
        setCurrentUser(matchedUser);
        navigate("/");
      } else {
        alert("Invalid email or password.");
      }

      setLoginData({
        email: "",
        password: "",
      });

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
            name="password"
            value={loginData.password}
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
