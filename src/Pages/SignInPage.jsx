import { Formik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";
import * as yup from "yup";
import NavbarComp from "../components/Navbar/NavbarComp";

const SignInPage = () => {
  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),
    lastName: yup.string().min(2).max(30).required("Required"),
    phoneNumber: yup.string().min(9).max(30).required("Required"),
    gender: yup.string().min(4).max(6).required("Required"),
    email: yup.string().email().min(3).max(255).required("Required"),
    password: yup
      .string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .min(8)
      .max(24)
      .required("Required"),
  });
  return (
    <>
      <div className="signup">
        <Formik
          validationSchema={schema}
          onSubmit={(data) => console.log(data)}
          initialValues={{
            name: "",
            lastName: "",
            phoneNumber: "",
            gender: "",
            email: "",
            password: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  isValid={!errors.email && touched.email}
                  isInvalid={!!errors.email}
                  type="email"
                  placeholder="Enter your email"
                  value={values.email}
                />
                <Form.Control.Feedback type="inValid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="password"
                  isValid={!errors.password && touched.password}
                  isInvalid={!!errors.password}
                  type="password"
                  placeholder="Password"
                  value={values.password}
                />
                <Form.Control.Feedback type="inValid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignInPage;
