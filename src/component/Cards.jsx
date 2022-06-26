import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
export const Cards = ({ data, remove }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex flex-row flex-wrap">
      {console.log(data)}
      {data &&
        data.map((item, index) => {
          return (
            <Card style={{ width: "18rem" }} className="container mt-4 p-2 ">
              <Card.Body className="text-center">
                <Card.Title>{item.task}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => remove(index)}
                >
                  Done
                </Button>

                <Button variant="primary" onClick={handleShow}>
                  Update
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="container justify-content-center mt-5">
                      <h1 className="text-center">Your Own Kanban Board</h1>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                          type="text"
                          name="task"
                          placeholder="Task"
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
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save Changes</Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};
