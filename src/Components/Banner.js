import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-cemter">
        <Col lg={8}>
          <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1000}>
              <a href="#MustTry">
                <img
                  className="d-block w-100"
                  src={require("../assets/c1.jpg")}
                  alt="First slide"
                />
              </a>
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={require("../assets/c2.jpg")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p className="d-none d-sm-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={require("../assets/c3.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="disply-5 mt-3">Food For Every</h2>
        <p className="lead text-mited">A food is the organic!!! </p>
      </div>
    </Container>
  );
};

export default Banner;
