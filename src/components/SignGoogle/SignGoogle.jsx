import React, { useContext, useEffect } from "react";
import { Navbar, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import { useHistory } from "react-router-dom";
import { adminContext } from "../../contexts/AdminContex";
import { authContext } from "../../contexts/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const SignGoogle = () => {
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
          style={{ maxWidth: "100px" }}
        >
          <Navbar.Text>
            Signed in as: <Badge bg="secondary">{user.displayName}</Badge>
          </Navbar.Text>
          {user ? (
            user.email === "nurlanabdullaev9820@gmail.com" ? (
              <Link to="/admin">
                <button>Войти как админ</button>
              </Link>
            ) : null
          ) : null}
        </Navbar.Collapse>
        <Button
          className=""
          style={{
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="outline-success"
          onClick={() => logOut()}
        >
          <LogoutIcon style={{ height: "20px", width: "20px" }} />
          {/* <h2>Sign with google</h2> */}
          {/* <LoginIcon /> */}
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
        <Button onClick={authWithGoogle}>
          <LoginIcon />
          {/* <h2>Sign with google</h2> */}
        </Button>
      </>
    );
  }

  let temp;
  if (email === adminEmail) {
    temp = (
      <Link to="/admin">
        <Button variant="contained">Admin</Button>
      </Link>
    );
  }

  return (
    <>
      <div>
        <div>{button}</div>
      </div>
    </>
  );
};

export default SignGoogle;
