// Data.js

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

class Data extends Component {
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
                    <Nav.Link eventKey="third">favourite-innovations</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">cloud</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">use-cases</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">data-schemas</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seventh">data-protection</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="eighth">data-partnerships</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ninth">client-API</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tenth">take-aways</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/learning-objectives.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src= "http://d1kkiml0fde0ur.cloudfront.net/data/introduction.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/favourite-innovations.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <LazyLoad height={480} placeholder="loading...">
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/cloud.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/use-cases.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/data-schemas.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/data-protection.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/data-partnerships.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ninth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/client-API.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tenth" placeholder="loading...">
                    <LazyLoad height={480}>
                      <video controls width="550" src="http://d1kkiml0fde0ur.cloudfront.net/data/take-aways.webm" />
                    </LazyLoad>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="Links" style={divStyle}>
          <a href = "https://github.com/aidan-parkinson/anonymous-feedback/blob/master/anonymous-feedback/src/components/form/form.js"  style={linkStyle}>
            Sample unstructured data schema
          </a>
          <br />
          <a href = "https://github.com/aidan-parkinson/ontology-things/blob/master/things.xml"  style={linkStyle}>
            Sample graph data schema
          </a>
          <br />
          <a href = "https://aws.amazon.com/products/"  style={linkStyle}>
            Amazon Web Services
          </a>
          <br />
          <a href = "https://cloud.google.com/products"  style={linkStyle}>
            Google Cloud
          </a>
          <br />
          <a href = "https://azure.microsoft.com/en-gb/"  style={linkStyle}>
            Microsoft Azure
          </a>
        </div>
        <div style={divStyle}>
          <Form/>
        </div>
      </div>
    );
  }
}

export default Data;
