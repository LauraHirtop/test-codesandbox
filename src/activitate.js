import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Activitate = (props) => {
  const { id, ora, titlu, loc, descriere, sterge } = props;

  return (
    <Container>
      <Row style={{ borderBottom: "1px solid #777", marginTop: "20px" }}>
        <Col sm={9} style={{ textAlign: "left" }}>
          <h4>
            {ora} - {titlu}
          </h4>
          <h6>Loc: {loc}</h6>
          <p>Descriere: {descriere}</p>
        </Col>
        <Col
          sm={3}
          className="d-flex align-items-center justify-content-center"
        >
          <Button variant="primary" onClick={() => sterge(id)}>
            Sterge
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Activitate;
