// Data.js

import React, { Component } from 'react';
import Form from '../form/form';

class Data extends Component {
  render() {
    return (
        <div>
          <h2>Data</h2>
          <div className="question">
            An impression:
          </div>
          <Form/>
        </div>
    );
  }
}

export default Data;
