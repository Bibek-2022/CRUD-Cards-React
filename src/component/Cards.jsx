import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
export const Cards = ({ data, remove }) => {
  const [show, setShow] = useState(false);
  const [forms, setForm] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...forms, [name]: value });
  };

  const handleOnSubmit = (a, b) => {
    console.log(a, b);
  };
  const handleClose = () => setShow(false);
  const handleShow = (i) => {
    setShow(true);
    console.log(i);
  };
  return (
    <div className="d-flex flex-row flex-wrap">
      {data &&
        data.map((item, index) => {
          return (
            <Card
              style={{ width: "18rem" }}
              className="container mt-4 p-2 "
              key={index}
            >
              <Card.Body className="text-center">
                <Card.Title>{item.task}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button
                  variant="success"
                  className="m-2"
                  onClick={() => remove(index)}
                >
                  Done
                </Button>

                <Button variant="warning" onClick={handleShow}>
                  Update
                </Button>
                {/* Modals starts */}
                <Modal show={show} onHide={handleClose}>
                  <Form
                    className="container justify-content-center mt-5"
                    onClick={() => handleOnSubmit(forms, index)}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                          type="text"
                          name="task"
                          placeholder="Task"
                          onChange={handleOnChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Desc</Form.Label>
                        <Form.Control
                          type="text"
                          name="desc"
                          placeholder="Description"
                          onChange={handleOnChange}
                        />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>

                      <Button variant="primary">Save Changes</Button>
                    </Modal.Footer>
                  </Form>
                </Modal>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};
