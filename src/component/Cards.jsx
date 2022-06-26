import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Cards = ({ data, remove, update }) => {
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
                <Button
                  variant="warning"
                  className="m-2"
                  onClick={() => update(index)}
                >
                  Done
                </Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};
