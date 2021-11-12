import React, { useContext } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./NavbarComp.css";
import { mainContext } from "../../contexts/MainContext";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const { getProducts } = useContext(mainContext);
  const history = useHistory();
  let object = new URLSearchParams(window.location.search);
  function filterProducts(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    // navigate(newUrl);
    history.push(newUrl);
    getProducts();
    // console.log(newUrl);
  }
  return (
    <div className="">
      <Navbar className="fixed-top navbar " bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/">
              <img src={Logo} alt="logo" className="logo"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="for-font" href="#action1">
                <Link to="/created" className="catalog">
                  Catalog
                </Link>
              </Nav.Link>
              <Nav.Link className="for-font" href="#action2">
                {/* <input type="button" onClick="document.getElementById('#section2').scrollIntoView();" />Section */}
                Section
              </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item className="for-font" href="#action3">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item className="for-font" href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="for-font" href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="for-font" href="#">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex ">
              <FormControl
                onChange={(e) => filterProducts("q", e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2 justify-content-center"
                aria-label="Search"
              />

              <Link to="/create" className="">
                <Button className="for-font" variant="outline-success">
                  Add
                </Button>
              </Link>
            </Form>
            <Link to="/sign-in" className="">
              <Button className="for-font" variant="outline-success">
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up" className="">
              <Button className="for-font" variant="outline-success">
                Sign Up
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomePage;
