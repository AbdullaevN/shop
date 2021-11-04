import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";

const CreateCard = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    label: "",
    phone: "",
    file: "",
  });

  const data = useContext(mainContext);
  const { createProduct } = data;
  const history = useHistory();
  const handleChange = (e) => {
    e.preventDefault();
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  const handleClick = (e) => {
    createProduct(product);
    history.push("/");
  };
  console.log(handleChange);
  return (
    <div>
      <div>
        <Form className=" container col-3">
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>name product</Form.Label>
            <Form.Control
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price product</Form.Label>
            <Form.Control
              name="price"
              onChange={handleChange}
              type="text"
              placeholder="price"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>label</Form.Label>
            <Form.Control
              name="label"
              onChange={handleChange}
              type="label"
              placeholder="Enter label"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              onChange={handleChange}
              type="number"
              placeholder="Enter phone"
            />
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Small file input example</Form.Label>
            <Form.Control
              name="file"
              onChange={handleChange}
              type="file"
              size="sm"
            />
          </Form.Group>

          <Button onClick={handleClick} variant="primary" type="submit">
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
