import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const LoginForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {};
  return (
    <Card>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="*********"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In
        </Button>

        <div className="text-end">
          Forgot Password <a href="/password-reset">Reset </a>Now
        </div>
      </Form>
    </Card>
  );
};

export default LoginForm;
