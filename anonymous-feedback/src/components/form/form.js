import React from 'react';

import './form.css';
import StarRating from '../affective-response/star-rating';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      description: null,
    };
  }

  componentDidMount(){

    var macaddress = require('macaddress');

    const thisMacaddress = macaddress;

    const fs = require('fs');
    const https = require('https');
    const axios = require('axios');

    // ...
    const httpsAgent = new https.Agent({
      ca: fs.readFileSync('/etc/ca-certificates/learning-iot-ca.crt'),
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
    axios({
      method: 'post',
      url: 'https://xx.xxx.xxx.xxx:443',
      data: {
        mac_address: thisMacaddress,
        likert_score: this.state.rating,
        description: this.state.description
      },
      config: httpsAgent
    });
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
