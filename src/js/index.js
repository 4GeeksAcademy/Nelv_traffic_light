// src/js/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import TrafficLight from './component/trafficLight';
import '../styles/index.css';  // Asegúrate de que la ruta es correcta

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));
