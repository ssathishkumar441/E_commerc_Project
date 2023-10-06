import React, { useState } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const PickoftheWeek = () => {
  const [show, setShow] = useState(false);

  return (
    <section id="MustTry" className="my-3">
      <div className="text-center my-2 py-3">
        <h2 className="display-5 text-primary">Pick of the Week</h2>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <Image
              src={require("../assets/Briyani.jpg")}
              fluid={true}
              alt="Food"
              rounded
            ></Image>
          </Col>
          <Col md={5}>
            <div className="p-3">
              <h2 className="h1">Chicken Briyani</h2>
              <p className="lead text-muted">
                ss hotel Briyani order and have it.
              </p>
              <Button variant="primary" onClick={() => setShow(true)}>
                <i class="bi bi-basket-fill"></i>Buy Now
              </Button>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className="position-fixed p-3 bttom-0 end-0"
          position="bottom-end"
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            dealy={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>1 mins ago</small>
            </Toast.Header>
            <Toast.Body>Iteam added your card.</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default PickoftheWeek;
