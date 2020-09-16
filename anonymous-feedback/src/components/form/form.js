import React, { Component } from 'react';
import { subscribe } from 'mqtt-react';
import './form.css';

import StarRating from '../affective-response/star-rating';

var macaddress = require('macaddress');

var thisMacaddress = macaddress.one

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
    //e.preventDefault();
    //MQTT client is passed on
    const { mqtt } = this.props;
    mqtt.publish(`anonymous-feedback/${thisMacaddress}/json`, {satisfactionRating: this.state.rating, description: this.state.description});
    this.setState({ rating: null, description: null});
  };

  render() {
   return (
      <div>
        <div className="form-input">
          <div className="label-unsatisfied">Unsatisfied</div>
          <div className="form-input-rating">
            <StarRating
              numberOfStars="5"
              currentRating={null}
              onClick={this.setRating}
            />
          </div>
          <div className="label-satisfied">Satisfied</div>
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

export default subscribe({
  topic: `anonymous-feedback/${thisMacaddress}/json`
})(Form)
