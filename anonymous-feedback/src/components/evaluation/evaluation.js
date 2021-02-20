// Evaluation.js

import React, { Component } from 'react';
import Form from '../form/form';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';

const divStyle = {
  margin : "20px",
  fontSize: "0.8rem"
};

const parStyle = {
  width: "800px",
  color: "#2d2d2d",
  textAlign: "justify",
  margin: "20px",
  fontSize: "0.8rem"
};

class Evaluation extends Component {
  render() {
    return (
      <div>
        <p style={parStyle}>
          This final section is intended for use by a teacher in a classroom setting.<br/><br/>
          A brief guidance document has been included for writing and teaching Harvard Case Studies.
          A recommended original Harvard Case Study for this course is then provided that may be used as an evaluation exercise to assess learners progress.
        </p>
        <div style={divStyle}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first"  unmountOnExit>
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="first">teaching-cases</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="second">gla-cities-case</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="third">gla-cities-note</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <iframe controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/teaching/writing-teaching-cases.pdf" title="writing-teaching-cases" height="400" />
                  </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="second">
                    <iframe controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/teaching/gla-cities-case.pdf" title="gla-cities-case" height="400" />
                  </Tab.Pane>
                </Tab.Content>
                <Tab.Content>
                  <Tab.Pane eventKey="third">
                    <iframe controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/teaching/gla-cities-TN.pdf" title="gla-cities-case" height="400" />
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

export default Evaluation;
