// Practical.js

import React, { Component} from 'react';
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

class Practical extends Component {

  render() {
    return (
      <div>
        <p style={parStyle}>
          This section offers a series of simple practical activities to provide a technical introduction to the main concepts of Internet-of-Things (IoT) technologies.<br/><br/>
          To participate fully it is necessary to obtain and assemble some equipment that is described in the `Equipment Requirements` document.
        </p>
        <div style={divStyle}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="preliminary" unmountOnExit>
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="preliminary">equipment-requirements</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="first">feedback-experiment</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="second">feedback-reflections</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="third">introducing-ble</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="fourth">gateway-instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="fifth">gateway-results</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="sixth">gateway-reflections</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="seventh">introducing-dht11</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="eighth">dht11-display-instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="ninth">dht11-mqtt-instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="tenth">dht11-mqtt-results</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-item" eventKey="eleventh">dht11-reflections</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="preliminary">
                    <iframe controls width="550" src="http://resources-learning-iot.aidanparkinson.xyz/practical/equipment-requirements.pdf" title="equipment-requirements" height="400" />
                  </Tab.Pane>
                  <Tab.Pane eventKey="first">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/feedback-experiment.mp4" type="video/mp4"/>
                      <track src="/resources/practical/feedback-experiment.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/feedback-reflections.mp4" type="video/mp4"/>
                      <track src="/resources/practical/feedback-reflections.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/introducing-ble.mp4" type="video/mp4"/>
                      <track src="/resources/practical/introducing-ble.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/gateway-instructions.mp4" type="video/mp4"/>
                      <track src="/resources/practical/gateway-instructions.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/gateway-results.mp4" type="video/mp4"/>
                      <track src="/resources/practical/gateway-results.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/gateway-reflections.mp4" type="video/mp4"/>
                      <track src="/resources/practical/gateway-reflections.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/introducing-dht11.mp4" type="video/mp4"/>
                      <track src="/resources/practical/introducing-dht11.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/dht11-display-instructions.mp4" type="video/mp4"/>
                      <track src="/resources/practical/dht11-display-instructions.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ninth" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/dht11-mqtt-instructions.mp4" type="video/mp4"/>
                      <track src="/resources/practical/dht11-mqtt-instructions.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tenth" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/dht11-mqtt-results.mp4" type="video/mp4"/>
                      <track src="/resources/practical/dht11-mqtt-results.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
                    </video>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eleventh" placeholder="loading...">
                    <video controls width="550">
                      <source src="http://resources-learning-iot.aidanparkinson.xyz/practical/dht11-reflections.mp4" type="video/mp4"/>
                      <track src="/resources/practical/dht11-reflections.vtt" label="English auto-captions" kind="captions" srclang="en" default/>
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
          <a href = "http://kibana.aidanparkinson.xyz:5601"  style={linkStyle}>
            Kibana application
          </a>
          <br />
          <a href = "https://github.com/aidan-parkinson/ble-mqtt-bridge"  style={linkStyle}>
            ble-mqtt-bridge source code
          </a>
          <br />
          <a href = "https://github.com/aidan-parkinson/dht11-display"  style={linkStyle}>
            dht11-display source code
          </a>
          <br />
          <a href = "https://github.com/aidan-parkinson/dht11-mqtt-bridge"  style={linkStyle}>
            dht11-mqtt-bridge source code
          </a>
          <br />
          <a href = "https://www.youtube.com/watch?v=J69-bxOSMC8"  style={linkStyle}>
            Official touchscreen and case for the Raspberry Pi 4 installation tutorial
          </a>
          <br />
          <a href = "https://www.youtube.com/watch?v=GsG1OClojOk"  style={linkStyle}>
            DHT11 sensor wiring tutorial
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

export default Practical;
