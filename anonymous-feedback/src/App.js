import React from 'react';
import './App.css';
import Loadable from 'react-loadable';


var FormWrapper  = Loadable({
  loader: () => import('./components/form/formWrapper'),
  loading: () => <div>have you the certificate? ...</div>,
});

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
        <FormWrapper/>
      </header>
    </div>
  );
}

export default App;
