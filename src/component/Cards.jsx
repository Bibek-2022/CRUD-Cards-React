import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Cards = ({ data }) => {
  return (
    <div className="d-flex flex-row flex-wrap">
      {console.log(data)}
      {data &&
        data.map((item) => {
          return (
            <Card style={{ width: "18rem" }} className="container mt-4 p-4 ">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.task}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};
