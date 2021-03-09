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
    background: "#F6FAF8",
    padding: "10px",
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    display: "flex",
    justifyContent: "centre"
  };

  const listStyle = {
    whiteSpace: "nowrap"
  }

  const containerStyle = {
    margin: "auto"
  }

  const navStyle = {
    width: "800px"
  }

  return (
    <Router>
      <div style={divStyle}>
        <div style={containerStyle}>
          <header style={headerStyle}>
          </header>
          <div style={navStyle}>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Learning IoT</span>
                <ul className="navbar-nav" style={listStyle}>
                  <li class="nav-item">
                    <Link to="/" class="nav-link">Introduction</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/practical" class="nav-link">Practical</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/systems-integration" class="nav-link">Systems Integration</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/data" class="nav-link">Data</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/studio" class="nav-link">Studio</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/evaluation" class="nav-link">Evaluation</Link>
                  </li>
                </ul>
            </nav>
          </div>
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
