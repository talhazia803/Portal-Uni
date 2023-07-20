/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";

// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,

} from "variables/charts.js";


const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
     
      <Container>
        <Row className="p-2">
          <Col className="mt-8">
          <h1>Student Name :</h1>
          </Col>
        </Row>
        <Row className="p-4">
          <Col md='4' >
          <span>Student ID</span>
          </Col>
          <Col md='4'>
          <span>Semester</span>
          </Col>
        </Row>
        <Row className="p-4">
          <Col md='4' >
          <span>Department Name</span>
          </Col>
          <Col md='4'>
          <span>CGPA:</span>
          </Col>
        </Row>
        <hr />
        <Row className="p-4">
          <Col md='4' >
          <h2><strong>Database System</strong> </h2>
          <span className="text-light">Course code: CMP-3340</span> <br />
          <span className="text-light">credit hours: 3.0</span> <br />
          <span className="text-light">attendance: 100%</span> <br />
          </Col>
          <Col md='2'></Col>
          <Col md='4'>
          <h2><strong>Pakistan Studies</strong> </h2>
          <span className="text-light">Course code: PKST-401</span> <br />
          <span className="text-light">credit hours: 2.0</span> <br />
          <span className="text-light">attendance: 100%</span> <br />
          </Col>
        </Row>
        <Row>
          <Col md='4'></Col>
          <Col md='4'>
          <h2><strong>English</strong> </h2>
          <span className="text-light">Course code: ENGL-201</span> <br />
          <span className="text-light">credit hours: 3.0</span> <br />
          <span className="text-light">attendance: 100%</span> <br />
          </Col>
          <Col md='4'></Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
