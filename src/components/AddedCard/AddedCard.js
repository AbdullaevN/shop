import React, { useContext, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { mainContext } from "../../contexts/MainContext";
import Logo from "../Navbar/logo.png";

const AddedCard = () => {
  const { getProducts, products } = useContext(mainContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products.map((item) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Logo} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
          <ListGroup key={item.id} className="list-group-flush">
            <ListGroupItem>{item.name}</ListGroupItem>
            <ListGroupItem>{item.price}</ListGroupItem>
            <ListGroupItem>{item.phone}</ListGroupItem>
            <ListGroupItem>{item.label}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AddedCard;
