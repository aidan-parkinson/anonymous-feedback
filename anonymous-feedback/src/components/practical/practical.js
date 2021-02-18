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
                    <Nav.Link eventKey="first">feedback-experiment</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">feedback-reflections</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">introducing-ble</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">gateway-instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">gateway-results</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">gateway-reflections</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">introducing-dht11</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eighth">dht11-display-instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ninth">dht11-mqtt-instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tenth">dht11-mqtt-results</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eleventh">dht11-reflections</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/feedback-experiment.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/feedback-reflections.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/introducing-ble.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/gateway-instructions.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/gateway-results.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/gateway-reflections.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/introducing-dht11.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/dht11-display-instructions.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="ninth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/dht11-mqtt-instructions.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tenth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/dht11-mqtt-results.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="eleventh" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/dht11-reflections.mp4" />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="Links" style={divStyle}>
          <a href = "http://kibana.aidanparkinson.xyz:5601"  style={linkStyle}>
            Kibana application
          </a>
          <br />
          <a href = "https://github.com/aidan-parkinson/ble-mqtt-bridge"  style={linkStyle}>
            ble-mqtt-bridge application
          </a>
          <br />
          <a href = "https://www.youtube.com/watch?v=GsG1OClojOk"  style={linkStyle}>
            ble-mqtt-bridge application
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
