// SystemsIntegration.js

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

class SystemsIntegration extends Component {
  render() {
    return (
      <div>
        <div style={divStyle}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">learning-objectives</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">introduction</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">integration-goals</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">open-protocols</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">illustrating-challenges</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">system-vulnerabilities</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">take-aways</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/systems-integration/learning-objectives.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src= "http://d1kkiml0fde0ur.cloudfront.net/systems-integration/introduction.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/systems-integration/integration-goals.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/systems-integration/open-protocols.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/systems-integration/illustrating-challenges.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/systems-integration/system-vulnerabilties.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/systems-integration/take-aways.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="Links" style={divStyle}>
          <a href = "https://www.youtube.com/watch?v=-aPRhSSv6ZE"  style={linkStyle}>
            Kathy Farrington - Google - The Next Level of IoT
          </a>
        </div>
        <div style={divStyle}>
          <Form/>
        </div>
      </div>
    );
  }
}

export default SystemsIntegration;
