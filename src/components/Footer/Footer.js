import React, { Fragment } from "react";
import "./Footer.css";
import fb from "./icons/f-b.svg";
import inst from "./icons/inst.svg";
import inicon from "./icons/in.svg";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";

//
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };
//

const Footer = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "YOUR_API_KEY",
  // });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);
  return (
    <Fragment>
      <div className="mainFtr ">
        <div className="coMainFtr">
          <div className="bireki col-3">
            <h5>Покупателям</h5>
            <Link to="/order">
              <a href="#">Доставка</a>
            </Link>
            <a href="#">Оплата</a>
            <a href="#">Возврат товара</a>
            <a href="#">Личный кабинет</a>
          </div>
          <div className="bireki col-3">
            <h5>Информация</h5>
            <a href="#">О нас</a>
            <a href="#">FAQ</a>
            <a href="#">Блог</a>
            <a href="#">Контакты</a>
            <a href="#">Обратная связь</a>
          </div>
          <div className="col-3">
            <h5>Мы на связи</h5>
            <span className="number">+7 (495) 123-45-67</span>
            <a target="blank" href="https://www.instagram.com/nabs0/">
              <img style={{ width: 35, height: 35 }} src={fb} />
            </a>
            <a target="blank" href="https://www.instagram.com/kazymbaev.a/">
              <img style={{ width: 35, height: 35 }} src={inst} />
            </a>
            <a target="blank" href="https://www.instagram.com/ulnv___/">
              <img style={{ width: 35, height: 35 }} src={inicon} />
            </a>
          </div>
          <div className="col-3">
            <h5>Подписка на новости</h5>
            <span className="fourth">
              Получите доступ к эксклюзивным скидкам
            </span>
            {/* <input type="email" placeholder="Email"></input> */}
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("worked");
              }}
            >
              {/* <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              ></GoogleMap> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {/* 
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              {/* <Button variant="primary" type="submit">
                Submit
              </Button> */}
            </Form>{" "}
          </div>
        </div>

        <div className="lastdiv">
          <span className="lastSpan">Furnistore ⓒ 2021</span>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(Footer);
