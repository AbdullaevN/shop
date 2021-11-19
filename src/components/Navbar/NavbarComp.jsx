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
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import SignGoogle from "../SignGoogle/SignGoogle";
import Favorites from "../Favorites/Favorites";
import FavoriteIcon from "@mui/icons-material/Favorite";
//Hello
const HomePage = () => {
  //test
  const { getProducts } = useContext(mainContext);
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

  console.log(user);
  return (
    <div className="main-nav mb-3">
      <Navbar className="navbar " bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto  my-lg-0"
              style={{ maxHeight: "50px" }}
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
                className=""
                aria-label="Search"
                style={{
                  height: "45px",
                  width: "170px",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
              {user ? temp : <></>}

              <Link to="/cart">
                <IconButton
                // size="large"
                // aria-label="show 4 new mails"
                // color="inherit"
                >
                  {/* <Badge badgecontent={phonesCountInCart} color="error"> */}
                  <Button
                    style={{
                      height: "30px",
                      width: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    variant="outline-success"
                  >
                    <ShoppingCartIcon
                      style={{ height: "15px", width: "15px" }}
                    />
                  </Button>
                  {/* </Badge> */}
                </IconButton>
              </Link>
              {/* <Favorites
                open={open}
                handleCloseFavorite={handleCloseFavorite}
                handleOpen={handleOpen}
              /> */}
            </Form>
            <SignGoogle />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomePage;
