import OnlyHeader from "components/Headers/OnlyHeader";
import React from "react";

import { Card, Col, Container, Progress, Row } from "reactstrap";

const Attendence = () => {
  return (
    <>
      <OnlyHeader />
      <Container>
        <Row>
          <Col md="6" className="p-4">
            <Card className="py-7 px-2">
              <h1 className="">Operating System</h1>
              {/* <FontAwesomeIcon icon={faCircle} /> */}

              <Progress
                value={50} // Set the progress value here (between 0 and 100)
                className=" "
                
              >50%</Progress>
            </Card>
          </Col>
          <Col md="6" className="p-4">
            <Card className="py-7 px-2">
              <h1 className="">DataBase System</h1>

              <Progress
                value={20} // Set the progress value here (between 0 and 100)
                className=" "
                
              >20%</Progress>
            </Card>
          </Col>
          <Col md="6" className="p-4">
            <Card className="py-7 px-2">
              <h1 className="">Pakistan Studies</h1>

              <Progress
                value={70} // Set the progress value here (between 0 and 100)
                className=" "
                
              >70%</Progress>
            </Card>
          </Col>
          <Col md="6" className="p-4">
            <Card className="py-7 px-2">
              <h1 className="">Linear Algebra</h1>
        

              <Progress
                value={40} // Set the progress value here (between 0 and 100)
                className=" "
                
              >40%</Progress>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Attendence;
