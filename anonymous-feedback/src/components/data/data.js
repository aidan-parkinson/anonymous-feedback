// Data.js

import React, { Component } from 'react';
import Form from '../form/form';
import Branding from '../branding/branding';
import Tab from 'react-bootstrap/Tab';
import { Row, Nav, Col } from 'react-bootstrap';

const divStyle = {
  margin : "20px",
  fontSize: "0.8rem",
};

const linkStyle = {
  color: "#2d2d2d",
  fontSize: "0.8rem"
};

const parStyle = {
  color: "#2d2d2d",
  textAlign: "justify",
  margin: "20px",
  fontSize: "0.8rem",
  maxWidth: "800px"
};

class Data extends Component {
  render() {
    return (
      <div>
        <p style={parStyle}>
          This section offers a series of presentations to provide a technical introduction to data strategy.
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
                    <Nav.Link className="nav-item" eventKey="third">favourite-innovations</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="fourth">cloud</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="fifth">use-cases</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="sixth">data-schemas</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="seventh">data-protection</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="eighth">data-partnerships</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="ninth">client-API</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="tenth">take-aways</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <video controls width="550">
                      <source src="/resources/data/learning-objectives.mp4" type="video/mp4"/>
                      <track src="/resources/data/learning-objectives.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <video controls width="550">
                      <source src="/resources/data/introduction.mp4" type="video/mp4"/>
                      <track src="/resources/data/introduction.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <video controls width="550">
                      <source src="/resources/data/favourite-innovations.mp4" type="video/mp4"/>
                      <track src="/resources/data/favourite-innovations.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <video controls width="550">
                      <source src="/resources/data/cloud.mp4" type="video/mp4"/>
                      <track src="/resources/data/cloud.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" placeholder="loading...">
                    <video controls width="550">
                      <source src="/resources/data/use-cases.mp4" type="video/mp4"/>
                      <track src="/resources/data/use-cases.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" placeholder="loading...">
                    <video controls width="550">
                      <source src="/resources/data/data-schemas.mp4" type="video/mp4"/>
                      <track src="/resources/data/data-schemas.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh" placeholder="loading...">
                    <video controls width="550">
                      <source src="/resources/data/data-protection.mp4" type="video/mp4"/>
                      <track src="/resources/data/data-protection.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth" placeholder="loading...">
                    <video controls width="550">
                      <source src="/resources/data/data-partnerships.mp4" type="video/mp4"/>
                      <track src="/resources/data/data-partnerships.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ninth" placeholder="loading...">
                    <video controls width="550">
                      <source src="/resources/data/client-API.mp4" type="video/mp4"/>
                      <track src="/resources/data/client-API.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tenth" placeholder="loading...">
                    <video controls width="550">
                      <source src="/resources/data/take-aways.mp4" type="video/mp4"/>
                      <track src="/resources/data/take-aways.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
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
        <div style={divStyle}>
          <Branding/>
        </div>
      </div>
    );
  }
}

export default Data;
