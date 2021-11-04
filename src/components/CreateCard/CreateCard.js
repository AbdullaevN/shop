import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateCard = () => {
  return (
    <div>
      <div>
        <Form className=" container col-3">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>name product</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price product</Form.Label>
            <Form.Control type="text" placeholder="price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>label</Form.Label>
            <Form.Control type="label" placeholder="Enter label" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Enter phone" />
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Small file input example</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="m-3">
        <Link to="/" className="">
          <Button variant="outline-success">Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default CreateCard;
