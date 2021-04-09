import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PurchaseForm = () => {
  return (
    <Container>
      <Row className="row-cols-1 row-cols-sm-2">
        <form>
          <Col>
            <label htmlFor=""></label>
            <input name='first name' type="text" />
          </Col>
        </form>
      </Row>
    </Container>
  );
};

export default PurchaseForm;
