import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Cards } from "./Cards";
export const Forms = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Update the data
  const update = (e) => {
    console.log(e);
    // data[i] = e;
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setData([...data, form]);
    // setForm({});
  };
  const clearAll = () => {
    setData([]);
  };
  // Remove item
  const remove = (index) => {
    console.log(index);
    setData(data.filter((item, i) => i !== index)); //new array
  };

  return (
    <div>
      <Form
        className="container justify-content-center mt-5"
        onSubmit={handleOnSubmit}
      >
        <h1 className="text-center">CRUD ACTION Board</h1>
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
      <hr />
      <div className="container d-flex flex-row-reverse">
        <Button variant="danger" onClick={clearAll} className="ms-auto mr-5">
          Clear All
        </Button>
      </div>
      <hr />
      <Cards data={data} remove={remove} update={update} />
    </div>
  );
};
