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
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import SignGoogle from "../SignGoogle/SignGoogle";
import Favorites from "../Favorites/Favorites";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HomePage = () => {
  //test
  const { getProducts, getPhones, phonesCountInCart } = useContext(mainContext);
  const { authWithGoogle, user, logOut, email, adminEmail } =
    React.useContext(authContext);

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

  //
  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseFavorite = () => setOpen(false);
  const { productsCountInFavorites, getFavorite } =
    React.useContext(mainContext);
  //
  //

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

  let temp;
  if (email === adminEmail) {
    temp = (
      <Link to="/admin">
        <Button variant="contained">Admin</Button>
      </Link>
    );
  }
  let temp1;
  let gg = <SignGoogle />;
  if (gg) {
    temp1 = (
      <Link to="/admin">
        <Button variant="contained">Admin</Button>
      </Link>
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
            </Form>
            {user ? temp : <></>}
            {<SignGoogle /> ? temp1 : <></>}
            <Link to="/sign-in" className="">
              <Button
                className="for-font sign"
                variant="outline-success"
                style={{
                  height: " 40px",
                  width: "60px",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up" className="">
              <Button
                className="for-font sign"
                variant="outline-success"
                style={{
                  height: " 40px",
                  width: "60px",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Button>
            </Link>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={productsCountInFavorites} color="primary">
                <FavoriteIcon
                  onClick={() => {
                    handleOpen();
                    getFavorite();
                  }}
                />
              </Badge>
            </IconButton>
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
            <Favorites
              open={open}
              handleCloseFavorite={handleCloseFavorite}
              handleOpen={handleOpen}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomePage;
