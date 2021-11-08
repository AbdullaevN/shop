import React, { useContext, useEffect, useState, useNavigate } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { mainContext } from "../../contexts/MainContext";
import * as yup from "yup";
import { Formik } from "formik";

const EditPage = () => {
  const data = useContext(mainContext);
  const {
    saveGetProductsEdit,
    productEdit,
    getProductsEdit,
    clearProductEdit,
  } = useContext(mainContext);

  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),
    price: yup.string().min(2).max(30).required("Required"),
    phone: yup.string().min(9).max(30).required("Required"),
    label: yup.string().min(4).max(15).required("Required"),
  });

  const params = useParams();
  useEffect(() => {
    clearProductEdit();
  }, []);
  useEffect(() => {
    getProductsEdit(params.id);
  }, []);
  console.log(productEdit);

  return (
    <div>
      <h1>EDIT PAGE</h1>
      <div>
        <div>
          {productEdit ? (
            <Formik
              validationSchema={schema}
              onSubmit={(editedProduct) => {
                saveGetProductsEdit(editedProduct);
                history.push("/");
              }}
              initialValues={productEdit}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form onSubmit={handleSubmit} className=" container col-3">
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
                      onChange={handleChange}
                      type="label"
                      placeholder="Enter label"
                      isValid={!errors.label && touched.label}
                      isInvalid={!!errors.label}
                      value={values.label}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      name="phone"
                      onChange={handleChange}
                      type="number"
                      placeholder="Enter phone"
                      isValid={!errors.phone && touched.phone}
                      isInvalid={!!errors.phone}
                      value={values.phone}
                    />
                  </Form.Group>
                  <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Small file input example</Form.Label>
                    <Form.Control
                      name="file"
                      onChange={handleChange}
                      type="file"
                      size="sm"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className="m-3">
          <Link to="/" className="">
            <Button variant="outline-success">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
