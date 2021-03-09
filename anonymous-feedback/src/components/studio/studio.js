// Studio.js

import React, { Component } from 'react';
import Form from '../form/form';
import Branding from '../branding/branding';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';

const divStyle = {
  margin : "20px",
  fontSize: "0.8rem"
};

const parStyle = {
  color: "#2d2d2d",
  textAlign: "justify",
  margin: "20px",
  fontSize: "0.8rem",
  maxWidth: "800px"
};

class Studio extends Component {
  render() {
    return (
      <div>
        <p style={parStyle}>
          This section provides an opportunity to participate in a studio activity to develop a concept for IoT innovation.<br/><br/>
          Please view the activity instructions and example results before making an attempt yourself, or as part of a team.
        </p>
        <div style={divStyle}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first"  unmountOnExit>
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="first">studio-activity</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="second">city-example</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="third">manufacturing-example</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/studio/studio-activity.mp4" type="video/mp4"/>
                      <track src="/resources/studio/studio-activity.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="second">
                    <iframe controls width="550" src="http://resources-learning-iot.aidanparkinson.xyz/studio/studio-city-example.pdf" title="city-example" height="350" />
                  </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="third">
                    <iframe controls width="550" src="http://resources-learning-iot.aidanparkinson.xyz/studio/studio-manufacturing-example.pdf" title="manufacturing-city-example" height="350" />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
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

export default Studio;
