import React from 'react';

import './form.css';
import StarRating from '../affective-response/star-rating';
import mqtt from 'mqtt';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      description: null,
    };
  }

  componentDidMount(){
    this.macaddress = require('macaddress').then(
      this.fs = require('fs')
    ).then(
      this.thisMacaddress = this.macaddress
    ).then(
      this.caFile = this.fs.readFileSync('/etc/ca-certificates/learning-iot-ca.crt')
    ).then
    (
      this.options = {
        // port: 8883,
        // host: '35.176.252.212',
        // key: KEY,
        ca: this.caFile,
        rejectUnauthorized: false,
        // The CA list will be used to determine if server is authorized
        // protocol: 'mqtts'
      }
    )};

  connect = props => {
    useMqtt(() => {
      this.client  = this.mqtt.connect("mqtts://35.176.252.212:8883", this.options);
      console.log("connected flag  " + this.client.connected);

      this.client.on("connect",function(){
      console.log("connected  "+ this.client.connected);
      });
    });
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  setRating = rating => {
    this.setState({ rating: rating });
  };

  broadcastFeedback = () => {
    this.client.publish(`anonymous-feedback/${this.thisMacaddress}/json`, {likert_score: this.state.rating, description: this.state.description});
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
