import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var mqtt = require('mqtt');
const fs = require('fs');

var caFile = fs.readFileSync('/etc/ca-certificates/learning-iot-ca.crt');

var options = {
  // port: 8883,
  // host: '35.176.252.212',
  // key: KEY,
  ca: caFile,
  rejectUnauthorized: false,
  // The CA list will be used to determine if server is authorized
  // protocol: 'mqtts'
}

var client  = mqtt.connect("mqtts://35.176.252.212:8883", options);
console.log("connected flag  " + client.connected);
client.on("connect",function(){
console.log("connected  "+ client.connected);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
