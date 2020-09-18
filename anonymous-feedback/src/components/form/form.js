import React from 'react';

import './form.css';
import StarRating from '../affective-response/star-rating';
import mqtt from 'mqtt';

var macaddress = require('macaddress')
var fs = require('fs')

var thisMacaddress = macaddress

var caFile = fs.readFileSync('/etc/ca-certificates/learning-iot-ca.crt')

var options = {
    // port: 8883,
    // host: '35.176.252.212',
    // key: KEY,
    ca: caFile,
    rejectUnauthorized: false,
    // The CA list will be used to determine if server is authorized
    // protocol: 'mqtts'
  }

client  = mqtt.connect("mqtts://35.176.252.212:8883", options);
console.log("connected flag  " + client.connected);

client.on("connect",function(){
console.log("connected  "+ client.connected);

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
    client.publish(`anonymous-feedback/${this.thisMacaddress}/json`, {likert_score: this.state.rating, description: this.state.description});
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

export default Form;
