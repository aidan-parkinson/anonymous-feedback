// Practical.js

import React, { Component } from 'react';
import Form from '../form/form';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';

import "./practical.css";

import Aidan from "../../assets/practical/aidan.mp4";
import PlatformBusiness from "../../assets/practical/platform-business.webm"

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
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <video controls src={Aidan} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <video controls src={PlatformBusiness} />
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
