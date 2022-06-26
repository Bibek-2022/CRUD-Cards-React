import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Cards } from "./Cards";
export const Forms = () => {
  const [form, setForm] = useState([]);
  const [data, setData] = useState([]);
  // const collection = [];
  const handleOnChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setData([...data, form]);
    // collection.push(data);
    // console.log(data);
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
      {/* {da && <Cards data={data} />} */}
      <Cards data={data} />
      {/* {data.map((item) => {
        <Cards data={item} />;
      })} */}
    </div>
  );
};
