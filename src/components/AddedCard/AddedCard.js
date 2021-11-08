import React, { Fragment, useContext, useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import Logo from "../Navbar/logo.png";
import "./AddedCard.css";

const AddedCard = () => {
  const { getProducts, products, deleteProduct } = useContext(mainContext);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    getProducts(params.id);
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
              <ListGroupItem className="inp">{item.label}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to="/edit">
                <Button className="card-btn" variant="outline-primary">
                  Edit
                </Button>
              </Link>

              <Button
                onClick={() => deleteProduct(item.id)}
                className="card-btn"
                variant="outline-primary"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default AddedCard;
