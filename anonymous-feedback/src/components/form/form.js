import React from 'react';

import './form.css';
import StarRating from '../affective-response/star-rating';
import mqtt from 'mqtt';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

//import macaddress from 'macaddress';
//import * as fs from 'fs';

//var caFile = fs.readFileSync('/etc/ssl/certs/learning-iot-ca.crt');

var options = {
    // clientId: JSON.stringify(macaddress.networkInterfaces(), null, 2),
    // port: 8883,
    // host: '35.176.252.212',
    // key: KEY,
    //ca: caFile,
    //rejectUnauthorized: false,
    // The CA list will be used to determine if server is authorized
    // protocol: 'mqtts'
}

var retain = {
  retain: true,
  qos:1
};

var client = mqtt.connect("ws://wss.aidanparkinson.xyz:9001", options);
console.log("connected flag  " + client.connected);

client.on("connect",function(){
console.log("connected  "+ client.connected);
})

const divStyle = {
  margin : "20px",
  width : "800px",
  justifyContent: "left"
};

const textStyle = {
  padding : "10px",
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      description: null
    };
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  setRating = rating => {
    this.setState({ rating: rating });
  };

  broadcastFeedback = () => {
    client.publish(`anonymous-feedback/json`, JSON.stringify({likert_score: this.state.rating, description: this.state.description}), retain);
    this.setState({ rating: null, description: null});
    window.location.reload(false);
  };

  render() {
   return (
      <div style={divStyle}>
        <div className="form-input">
          <Row>
            <Col className="form-input-rating">
              <StarRating
                numberOfStars="5"
                currentRating={null}
                onClick={this.setRating}
              />
            </Col>
            <Col className="actions">
               <Button variant="primary" onClick={this.broadcastFeedback}>
                Submit
               </Button>
            </Col>
          </Row>
          <Row>
            <textarea
              name="description"
              id="description"
              onChange={this.handleChange}
              placeholder="A description of your experience..."
              style={textStyle}
              />
          </Row>
        </div>
      </div>
    );
  }
}

export default Form
