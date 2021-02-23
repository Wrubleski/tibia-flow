import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <Row className="justify-content-md-center ">
      <Col xs={12}>
        <Link to={props.item.link}>
          <Button block={true} variant="dark" className="mb-1 mt-1">
            {props.item.name}
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default MenuItem;
