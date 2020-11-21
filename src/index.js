import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import store from './redux/store';

const firebaseConfig = {
  apiKey: "AIzaSyBMm8pwVH20qasYZ9P7GfNsSnft2n5JUAg",
  authDomain: "cmessenger-1d11c.firebaseapp.com",
  databaseURL: "https://cmessenger-1d11c.firebaseio.com",
  projectId: "cmessenger-1d11c",
  storageBucket: "cmessenger-1d11c.appspot.com",
  messagingSenderId: "360338092934",
  appId: "1:360338092934:web:d0d3d92929351781677207",
  measurementId: "G-745D05RG2Z"
};

firebase.initializeApp(firebaseConfig);


window.store = store;

ReactDOM.render(
  <Provider store={store}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
