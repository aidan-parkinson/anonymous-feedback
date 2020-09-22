import React from 'react';
import './App.css';
import Form from './components/form/form'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-heading">
          <div className="project">
            Learning IoT
          </div>
          <div className="application">
            anonymous-feedback
          </div>
        </div>
        <div className="question">
          An impression:
        </div>
        <Form/>
      </header>
    </div>
  );
}

export default App;
