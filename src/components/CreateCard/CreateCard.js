import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import * as yup from "yup";
import { Formik } from "formik";
import './CreatedCard.css'

const CreateCard = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    label: "",

  });

  const data = useContext(mainContext);
  const { createProduct } = data;
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),
    price: yup.string().min(2).max(30).required("Required"),
    label: yup.string().min(4).max(1000).required("Required"),

  });
  return (
    <div>
      <div>
        <Formik
          validationSchema={schema}
          onSubmit={(data) => {
            createProduct(data);
            history.push("/");
          }}
          initialValues={{
            name: "",
            price: "",

            label: "",

          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className=" container divka col-3">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>name product</Form.Label>
                <Form.Control
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter name"
                  isValid={!errors.name && touched.name}
                  isInvalid={!!errors.name}
                  value={values.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price product</Form.Label>
                <Form.Control
                  name="price"
                  onChange={handleChange}
                  type="text"
                  placeholder="price"
                  isValid={!errors.price && touched.price}
                  isInvalid={!!errors.price}
                  value={values.price}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>label</Form.Label>
                <Form.Control
                  name="label"
                  style={{ height: " " }}
                  onChange={handleChange}
                  type="label"
                  placeholder="Enter label"
                  isValid={!errors.label && touched.label}
                  isInvalid={!!errors.label}
                  value={values.label}
                />
              </Form.Group>



              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="m-3">
        <Link to="/" className="">
          <Button variant="outline-success">Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default CreateCard;
