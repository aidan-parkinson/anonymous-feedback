import React, { Component } from 'react';
import Form from '../form/form';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';

const divStyle = {
  margin : "20px",
};

class Teaching extends Component {
  render() {
    return (
      <div>
        <div style={divStyle}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">teaching-cases</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="second">gla-cities-case</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="third">gla-cities-note</Nav.Link>
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

export default Teaching;
