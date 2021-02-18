import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Introduction from './components/introduction/introduction';
import Practical from './components/practical/practical';
import SystemsIntegration from './components/systems-integration/systems-integration';
import Data from './components/data/data';
import Studio from './components/studio/studio';
import Evaluation from './components/evaluation/evaluation';

function App() {

  const headerStyle = {
    margin: "20px",
  };

  const divStyle = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    background: "#F6FAF8"
  };

  return (
    <Router>
      <div style={divStyle}>
        <div>
          <header style={headerStyle}>
          </header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav-fill">
              <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Learning IoT</span>
              </nav>
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link">introduction</Link></li>
                <li><Link to={'/practical'} className="nav-link">practical</Link></li>
                <li><Link to={'/systems-integration'} className="nav-link">systems integration</Link></li>
                <li><Link to={'/data'} className="nav-link">data</Link></li>
                <li><Link to={'/studio'} className="nav-link">studio</Link></li>
                <li><Link to={'/evaluation'} className="nav-link">evaluation</Link></li>
              </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Introduction} />
              <Route exact path='/practical' component={Practical} />
              <Route path='/systems-integration' component={SystemsIntegration} />
              <Route path='/data' component={Data} />
              <Route path='/studio' component={Studio} />
              <Route path='/evaluation' component={Evaluation} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
