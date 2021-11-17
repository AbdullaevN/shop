import React, { useContext, useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./TAMLER.svg";
import "./NavbarComp.css";
import { mainContext } from "../../contexts/MainContext";
import { useHistory } from "react-router-dom";
import { adminContext } from "../../contexts/AdminContex";
import { authContext } from "../../contexts/AuthContext";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const HomePage = () => {
  //test
  const { getProducts, getPhones, phonesCountInCart } = useContext(mainContext);
  const { authWithGoogle, user, logOut } = React.useContext(authContext);

  const { logoutUser, setUser } = React.useContext(adminContext);
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

  let button;
  function logout() {
    logoutUser();
    localStorage.clear();
  }

  let struser = localStorage.getItem("user");
  function setuser() {
    if (struser) {
      setUser(JSON.parse(struser));
    }
  }
  useEffect(() => setuser(), [struser]);
  // console.log(user, "user");
  if (user) {
    let struser = JSON.stringify(user);
    localStorage.setItem("user", struser);
    button = (
      <>
        <Navbar.Collapse
          className="justify-content-end me-2 navbar"
          style={{ maxWidth: "200px" }}
        >
          <Navbar.Text>
            Signed in as: <Badge bg="secondary">{user.name}</Badge>
          </Navbar.Text>
        </Navbar.Collapse>
        <Button
          className=""
          style={{ height: "30px" }}
          variant="outline-success"
          onClick={() => logOut()}
        >
          <i class="bi bi-door-closed"></i>
        </Button>
      </>
    );
  } else {
    button = (
      <>
        {/* <Button
          className="me-2 text-success"
          variant="outline-dark"
          onClick={handleShowLogin}
        >
          Log In
        </Button>
        <Button
          className="me-2 text-success"
          variant="outline-dark"
          onClick={handleShow}
        >
          Sign Up
        </Button> */}
        <Button onClick={authWithGoogle}></Button>
      </>
    );
  }

  return (
    <div className="main-nav mb-3">
      <Navbar className="navbar " bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
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
                <Link to="/order" className="catalog">
                  Order
                </Link>
              </Nav.Link>
              <Nav.Link className="for-font" href="#">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/news"
                >
                  News
                </Link>
              </Nav.Link>
              <Nav.Link className="for-font" href="#">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/contacts"
                >
                  Contacts
                </Link>
              </Nav.Link>

              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo"></img>
                </Link>
              </div>
            </Nav>
            <Form className="d-flex ">
              <FormControl
                onChange={(e) => filterProducts("q", e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2 justify-content-center"
                aria-label="Search"
              />
              {button}
              <Link to="/create" className="">
                <Button className="for-font" variant="outline-success">
                  Add
                </Button>
              </Link>
            </Form>
            {/* <Link to="/sign-in" className="">
              <Button className="for-font sign" variant="outline-success">
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up" className="">
              <Button className="for-font sign" variant="outline-success">
                Sign Up
              </Button>
            </Link> */}
            {/* <Link to="/cart" className="">
              <Button className="for-font sign" variant="outline-success">
                <i class="bi bi-cart2"></i>
              </Button>
            </Link> */}
            <Link to="/cart">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgecontent={phonesCountInCart} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomePage;
