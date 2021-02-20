// SystemsIntegration.js

import React, { Component } from 'react';
import Form from '../form/form';
import Branding from '../branding/branding';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';

const divStyle = {
  margin : "20px",
  fontSize: "0.8rem"
};

const linkStyle = {
  color: "#2d2d2d",
  fontSize: "0.8rem"
};

const parStyle = {
  width: "800px",
  color: "#2d2d2d",
  textAlign: "justify",
  margin: "30px",
  fontSize: "0.8rem"
};

class SystemsIntegration extends Component {
  render() {
    return (
      <div>
        <p style={parStyle}>
          This section offers a series of presentations to provide a technical introduction to systems integration strategy.
        </p>
        <div style={divStyle}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first"  unmountOnExit>
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="first">learning-objectives</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="second">introduction</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="third">integration-goals</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="fourth">open-protocols</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="fifth">illustrating-challenges</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="sixth">system-vulnerabilities</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="seventh">take-aways</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/systems-integration/learning-objectives.mp4" type="video/mp4"/>
                      <track src="/resources/systems-integration/learning-objectives.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/systems-integration/introduction.mp4" type="video/mp4"/>
                      <track src="/resources/systems-integration/introduction.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/systems-integration/integration-goals.mp4" type="video/mp4"/>
                      <track src="/resources/systems-integration/integration-goals.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/systems-integration/open-protocols.mp4" type="video/mp4"/>
                      <track src="/resources/systems-integration/open-protocols.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/systems-integration/illustrating-challenges.mp4" type="video/mp4"/>
                      <track src="/resources/systems-integration/illustrating-challenges.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/systems-integration/system-vulnerabilties.mp4" type="video/mp4"/>
                      <track src="/resources/systems-integration/system-vulnerabilties.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/systems-integration/take-aways.mp4" type="video/mp4"/>
                      <track src="/resources/systems-integration/take-aways.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="Links" style={divStyle}>
          <h2 class="navbar-brand mb-0 h1">Web links</h2>
          <br />
          <a href = "https://www.youtube.com/watch?v=-aPRhSSv6ZE"  style={linkStyle}>
            Kathy Farrington - Google - The Next Level of IoT
          </a>
        </div>
        <div style={divStyle}>
          <Form/>
        </div>
        <div style={divStyle}>
          <Branding/>
        </div>
      </div>
    );
  }
}

export default SystemsIntegration;
