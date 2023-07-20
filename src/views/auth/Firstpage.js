import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

const Firstpage = () => {
  const history = useHistory();
  return (
    <>
      <Container>
        {/* <h2 className="text-center text-Dark my-4">Click Button to Login</h2> */}
        <Row className="mt-lg-5 justify-content-center align-item-center  ">
          <Col md="3" lg="4"></Col>
          <Col
            md="3"
            lg="4"
            className="d-flex align-item-center justify-content-between"
          >
            <Button className="adminlogin">Admin Login</Button>
            <Button className="facultyLogin">Faculty Login</Button>
          </Col>
          <Col md="3" lg="4"></Col>
        </Row>
        <Row>
          <Col className="text-center mt-4 ">
          <Button className="btn btn-dark" 
          onClick={()=>history.push('../auth/Login.js')}>Student</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Firstpage;
