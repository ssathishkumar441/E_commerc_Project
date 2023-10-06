import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FoodCard from "./FoodCard";

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  return (
    <section id="Menu" className="bg-light">
      <Container>
        <div className="text-center my-3 py-5">
          <h3 className="text-primary">
            SS Foods
            <i class="bi bi-cake-fill"></i>
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={4} key={item}>
                <FoodCard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
