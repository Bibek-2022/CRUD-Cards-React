import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { deleteCard, getCard, updateCard } from "../helper/axiosHelper";
export const Cards = () => {
  const [show, setShow] = useState(false);
  const [data, setdata] = useState([]);
  const [forms, setForm] = useState([]);

  const red = async () => {
    const result = await getCard();
    console.log(result);
    return setdata(result.result);
  };

  useEffect(() => {
    red();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...forms, [name]: value });
  };

  const remove = (index) => {
    deleteCard(index);
    getCard().then((res) => {
      console.log(res.result);
      setdata(res.result);
      red();
    });
  };
  const handleOnSubmit = (e) => {
    // e.preventDefault();
    console.log(forms);
    updateCard(forms) && red();
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
              key={item._id}
            >
              <Card.Body className="text-center">
                <Card.Title>{item.task}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button
                  variant="success"
                  className="m-2"
                  onClick={() => remove(item._id)}
                >
                  Done
                </Button>

                <Button variant="warning" onClick={handleShow}>
                  Update
                </Button>
                {/* Modals starts */}
                <Modal show={show} onHide={handleClose}>
                  <Form className="container justify-content-center mt-5">
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

                      <Button variant="primary" onClick={handleOnSubmit}>
                        Save Changes
                      </Button>
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
