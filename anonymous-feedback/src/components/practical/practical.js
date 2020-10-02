// Practical.js

import React, { Component } from 'react';
import Form from '../form/form';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

import "./practical.css";

import Aidan from "../../assets/practical/aidan.mp4";
import PlatformBusiness from "../../assets/practical/platform-business.webm";
import FeedbackExperiment from "../../assets/practical/feedback-experiment.webm";
import FeedbackReflections from "../../assets/practical/feedback-reflections.webm";
import IntroducingBLE from "../../assets/practical/introducing-ble.webm";
import GatewayInstructions from "../../assets/practical/gateway-instructions.webm";
import GatewayReflections from "../../assets/practical/gateway-reflections.webm";
import OpenCases from "../../assets/practical/open-cases.webm";

class Practical extends Component {
  render() {
    return (
        <div>
          <h2>Practical</h2>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">aidan</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">platform-business</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">feedback-experiment</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">feedback-reflections</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">introducing-ble</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">gateway-instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">gaateway-reflections</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eighth">open-cases</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <LazyLoad height={480}>
                      <video controls src={Aidan} />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <LazyLoad height={480}>
                      <video controls src={PlatformBusiness} />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <LazyLoad height={480}>
                      <video controls src={FeedbackExperiment} />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <LazyLoad height={480}>
                      <video controls src={FeedbackReflections} />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <LazyLoad height={480}>
                      <video controls src={IntroducingBLE} />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <LazyLoad height={480}>
                      <video controls src={GatewayInstructions} />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <LazyLoad height={480}>
                      <video controls src={GatewayReflections} />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eigth">
                    <LazyLoad height={480}>
                      <video controls src={OpenCases} />
                    </LazyLoad>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          <div className="question">
            An impression:
          </div>
          <Form/>
        </div>
    );
  }
}

export default Practical;
