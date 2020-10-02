import React, { Component } from 'react';
import Form from '../form/form';

class Studio extends Component {
  render() {
    return (
        <div>
          <h2>Studio</h2>
          <div className="question">
            An impression:
          </div>
          <Form/>
        </div>
    );
  }
}

export default Studio;
