import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Row>
        <Col>
          <Form className=" py-3">
            <Form.Group className="mb-5">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email ID"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>PassWord</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Password over bere"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Your Email ID"
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <div className="d-grid">
                <Button variant="warning">Log In</Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <div className="pb-5">
            <h4 className="text-center pb-3">Contact Details of the Owner</h4>
            <p>
              You can Contsct us by providing the mail and number below which
              You can use and contact for us. If you need anythings from
              us.Thank You all,ave a Nice Day
            </p>
          </div>

          <div>
            <NavLink to="Mail">
              <Button variant="danger">Get Mail ID</Button>
            </NavLink>
            <NavLink to="Phone">
              <Button variant="primary">Get Mobile Number</Button>
            </NavLink>
            <Outlet />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
