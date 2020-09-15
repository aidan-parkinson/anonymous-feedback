import React, { Component } from 'react';
import './form.css';

import StarRating from '../affective-response/star-rating';

var macaddress = require('macaddress');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      description: null,
      macaddress: macaddress.one
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
    //// TODO: Publish to server
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
          <button type="submit" onClick={this.broadcastFeedback}>
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
