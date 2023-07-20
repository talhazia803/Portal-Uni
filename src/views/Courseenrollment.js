import OnlyHeader from "components/Headers/OnlyHeader";
import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Courseenrollment = () => {
  return (
    <div>
        <OnlyHeader></OnlyHeader>
      <Container className=" mt-4">
        
        <Row className="">
          <Col md="4" className="px-4">
            <Card>
              <CardHeader> <strong>Operating System Prof:</strong> </CardHeader>
              <CardBody>
                course code: CMPC-204 <br />
                credit hours: 4.0
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="px-4">
            <Card>
              <CardHeader> <strong>Database System Prof:</strong> </CardHeader>
              <CardBody>
                course code: CMPC-204 <br />
                credit hours: 4.0
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="px-4">
            <Card>
              <CardHeader> <strong>Pakistan Studies Prof:</strong> </CardHeader>
              <CardBody>
                course code: CMPC-204 <br />
                credit hours: 4.0 
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="px-4 py-7">
            <Card>
              <CardHeader> <strong>Linear Algebra Prof:</strong> </CardHeader>
              <CardBody>
                course code: CMPC-204 <br />
                credit hours: 4.0
              </CardBody>
            </Card>
          </Col>
          <Col md="4" className="px-4 py-7">
            <Card>
              <CardHeader> <strong>English Prof:</strong> </CardHeader>
              <CardBody>
                course code: CMPC-204 <br />
                credit hours: 4.0
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courseenrollment;
