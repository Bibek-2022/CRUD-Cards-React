import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Cards } from "./Cards";
export const Forms = () => {
  const [form, setForm] = useState([]);
  const [data, setData] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setData([...data, form]);
    // setForm({});
  };

  // Remove item
  const remove = (index) => {
    setData(data.filter((item, i) => i !== index)); //new array
  };
  return (
    <div>
      <Form
        className="container justify-content-center mt-5"
        onSubmit={handleOnSubmit}
      >
        <h1 className="text-center">Your Own Kanban Board</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            name="task"
            placeholder="Task"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Desc</Form.Label>
          <Form.Control
            type="text"
            name="desc"
            placeholder="Description"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Cards data={data} remove={remove} />
    </div>
  );
};
