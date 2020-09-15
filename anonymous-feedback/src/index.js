import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Connector } from 'mqtt-react';

var options = {
  port: 8883,
  host: '35.176.252.212',
  // key: KEY,
  cert: '/etc/ca-certificates/learning-iot-ca.crt',
  rejectUnauthorized: false,
  // The CA list will be used to determine if server is authorized
  // ca: TRUSTED_CA_LIST,
  protocol: 'mqtts'
}

ReactDOM.render(
  <React.StrictMode>
    <Connector mqttProps={options}>
      <App />
    </Connector>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
