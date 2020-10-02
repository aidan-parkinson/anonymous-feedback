// Practical.js

import React, { Component } from 'react';
import Form from '../form/form';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

const divStyle = {
  margin : "20px",
};

const linkStyle = {
  color: "#2d2d2d",
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
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/aidan.mp4" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src= "http://d1kkiml0fde0ur.cloudfront.net/practical/platform-business.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/feedback-experiment.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/feedback-reflections.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/introducing-ble.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/gateway-instructions.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/gateway-reflections.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eigth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/practical/open-cases.webm" />
                    </LazyLoad>
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
            http://kibana.aidanparkinson.xyz:5601
          </a>
          <br />
          <a href = "https://github.com/aidan-parkinson/ble-mqtt-bridge"  style={linkStyle}>
            https://github.com/aidan-parkinson/ble-mqtt-bridge
          </a>
          <br />
          <a href = "https://www.eclipse.org/org/foundation/"  style={linkStyle}>
            https://www.eclipse.org/org/foundation/
          </a>
          <br />
          <a href = "https://smartcambridge.org/"  style={linkStyle}>
            https://smartcambridge.org/
          </a>
          <br />
          <a href = "https://www.londonair.org.uk/"  style={linkStyle}>
            https://www.londonair.org.uk/
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
