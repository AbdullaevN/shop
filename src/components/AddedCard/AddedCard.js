import React, { Fragment, useContext, useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import Logo from "../Navbar/TAMLER.svg";
import "./AddedCard.css";

const AddedCard = () => {
  const { getProducts, products, deleteProduct, currentPosts } =
    useContext(mainContext);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    getProducts(params.id);
  }, []);

  //
  //TEST
  console.log();
  return (
    <Fragment>
      <div className="container card-div ">
        {currentPosts.map((item) => (
          <Card className="card" key={item.id}>

            <Card.Body>
              <img style={{ width: '200px', height: '300px' }} src={item.image} />

              <Card.Title>Jewelry</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush  ">
              <ListGroupItem className="inp">{item.name}</ListGroupItem>
              <ListGroupItem className="inp">{item.price}</ListGroupItem>

              <ListGroupItem className="inp" style={{ height: "250px" }} color="red">{item.details}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to={`/edit/${item.id}`}>
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
