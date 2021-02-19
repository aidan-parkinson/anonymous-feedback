// Studio.js

import React, { Component } from 'react';
import Form from '../form/form';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';

const divStyle = {
  margin : "20px",
  fontSize: "0.8rem"
};

class Studio extends Component {
  render() {
    return (
      <div>
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
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/studio/studio-activity.mp4" />
                  </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="second">
                    <iframe controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/studio/studio-city-example.pdf" title="city-example" height="350" />
                  </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="third">
                    <iframe controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/studio/studio-manufacturing-example.pdf" title="manufacturing-city-example" height="350" />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div style={divStyle}>
          <Form/>
        </div>
      </div>
    );
  }
}

export default Studio;
