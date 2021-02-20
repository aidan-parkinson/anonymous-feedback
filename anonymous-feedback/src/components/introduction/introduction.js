// Introduction.js

import React, { Component } from 'react';
import Form from '../form/form';
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
  margin: "20px",
  fontSize: "0.8rem"
}

class Introduction extends Component {
  render() {
    return (
      <div>
      <p style={parStyle}>
        Welcome to the Executive Education in Learning IoT online syllabus! This section provides an introduction to the course.<br/><br/>
        Please proceed to follow the content in order, selecting each blue tab from top-to-bottom before moving onto the next section to the right using the top navigation.
      </p>
        <div style={divStyle}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first"  unmountOnExit>
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="second">aidan</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="third">platform-business</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="fourth">open-cases</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="second">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/introduction/aidan.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <video controls width="550" src= "http://d1kkiml0fde0ur.cloudfront.net/introduction/platform-business.mp4" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth" placeholder="loading...">
                    <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/introduction/open-cases.mp4" />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="Links" style={divStyle}>
          <h2 class="navbar-brand mb-0 h1">Web links</h2>
          <br />
          <a href = "https://github.com/aidan-parkinson"  style={linkStyle}>
            https://github.com/aidan-parkinson
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

export default Introduction;
