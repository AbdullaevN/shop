import React, { Fragment } from "react";
import "./Footer.css";
import fb from "./icons/f-b.svg";
import inst from "./icons/inst.svg";
import inicon from "./icons/in.svg";
import { Form } from "react-bootstrap";

const Footer = () => {
  return (
    <Fragment>
      <div className="mainFtr ">
        <div className="coMainFtr">
          <div className="bireki col-3">
            <h5>Покупателям</h5>
            <a href="#">Доставка</a>
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
            <a href="#">
              <img style={{ width: 35, height: 35 }} src={fb} />
            </a>
            <a href="#">
              <img style={{ width: 35, height: 35 }} src={inst} />
            </a>
            <a href="#">
              <img style={{ width: 35, height: 35 }} src={inicon} />
            </a>
          </div>
          <div className="col-3">
            <h5>Подписка на новости</h5>
            <span className="fourth">
              Получите доступ к эксклюзивным скидкам
            </span>
            {/* <input type="email" placeholder="Email"></input> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="inpu"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </div>
        </div>

        <div className='lastdiv'>
          <span className="lastSpan">Furnistore ⓒ 2021</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
