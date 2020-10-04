// Practical.js

import React, { Component } from 'react';
import Form from '../form/form';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';

const divStyle = {
  margin : "20px",
};

const linkStyle = {
  color: "#2d2d2d",
  fontSize: "0.9rem"
};

class Practical extends Component {
  render() {
    return (
      <div>
        <div style={divStyle}>
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
                    <Nav.Link eventKey="seventh">gateway-reflections</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eighth">open-cases</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/aidan.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <video controls width="550" src= "http://d1kkiml0fde0ur.cloudfront.net/practical/platform-business.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/feedback-experiment.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/feedback-reflections.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/introducing-ble.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/gateway-instructions.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/gateway-reflections.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/open-cases.mp4" />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="Links" style={divStyle}>
          <a href = "https://github.com/aidan-parkinson"  style={linkStyle}>
            https://github.com/aidan-parkinson
          </a>
          <br />
          <a href = "http://kibana.aidanparkinson.xyz:5601"  style={linkStyle}>
            Kibana application
          </a>
          <br />
          <a href = "https://github.com/aidan-parkinson/ble-mqtt-bridge"  style={linkStyle}>
            ble-mqtt-bridge application
          </a>
          <br />
          <a href = "https://www.eclipse.org/org/foundation/"  style={linkStyle}>
            Eclipse Foundation
          </a>
          <br />
          <a href = "https://smartcambridge.org/"  style={linkStyle}>
            Smart Cambridge
          </a>
          <br />
          <a href = "https://www.londonair.org.uk/"  style={linkStyle}>
            Londonair
          </a>
        </div>
        <div style={divStyle}>
          <Form/>
        </div>
      </div>
    );
  }
}

export default Practical;
