import React, { Component } from 'react';
import './form.css';

import StarRating from '../affective-response/star-rating';

var macaddress = require('macaddress');

var thisMacaddress = macaddress.one

var mqtt = require('mqtt');

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
    mqtt.publish(`anonymous-feedback/${thisMacaddress}/json`, {likert_score: this.state.rating, description: this.state.description});
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
