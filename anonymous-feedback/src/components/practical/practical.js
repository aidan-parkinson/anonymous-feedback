// Practical.js

import React, { Component } from 'react';
import Form from '../form/form';

class Practical extends Component {
  render() {
    return (
        <div>
          <h2>Practical</h2>
          <div className="question">
            An impression:
          </div>
          <Form/>
        </div>
    );
  }
}

export default Practical;
