import React from 'react';

import './form.css';
import StarRating from '../affective-response/star-rating';
import mqtt from 'mqtt';

import macaddress from 'macaddress';
import * as fs from 'fs';

var caFile = fs.readFileSync('/etc/ca-certificates/learning-iot-ca.crt');

var options = {
    clientId: macaddress,
    // port: 8883,
    // host: '35.176.252.212',
    // key: KEY,
    ca: caFile,
    rejectUnauthorized: false,
    // The CA list will be used to determine if server is authorized
    // protocol: 'mqtts'
  }

var client = mqtt.connect("wss://wss.aidanparkinson.xyz:443", options);
console.log("connected flag  " + client.connected);

client.on("connect",function(){
console.log("connected  "+ client.connected);
})

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      description: null,
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
    client.publish(`anonymous-feedback/${macaddress}/json`, {likert_score: this.state.rating, description: this.state.description});
    this.setState({ rating: null, description: null});
  };

  render() {
   return (
      <div>
        <div className="form-input">
          <div className="form-input-rating">
            <StarRating
              numberOfStars="5"
              currentRating={null}
              onClick={this.setRating}
            />
          </div>
          <div className="actions">
            <button onClick={this.broadcastFeedback}>
              Submit
            </button>
          </div>
          <textarea
            name="description"
            id="description"
            onChange={this.handleChange}
            placeholder="A description of your experience..."
            />
        </div>
      </div>
    );
  }
}

export default Form
