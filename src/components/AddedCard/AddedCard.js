import React, { Fragment, useContext, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { mainContext } from "../../contexts/MainContext";
import Logo from "../Navbar/logo.png";
import "./AddedCard.css";

const AddedCard = () => {
  const { getProducts, products } = useContext(mainContext);
  useEffect(() => {
    getProducts();
  }, []);

  //
  //TEST
  return (
    <Fragment>
      <div className="container card-div ">
        {products.map((item) => (
          <Card className="card" key={item.id}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="inp">{item.name}</ListGroupItem>
              <ListGroupItem className="inp">{item.price}</ListGroupItem>
              <ListGroupItem className="inp">{item.phone}</ListGroupItem>
              <ListGroupItem className="inp">{item.label}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default AddedCard;
