import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {configureStore} from "./store";

const store = configureStore();

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert("Sorry. This option is disabled by the developer.");
});

document.onkeydown = function(e) {
  if(e.keyCode === 123) {return false;}
  if(e.ctrlKey && e.shiftKey && e.keyCode === 73){return false;}
  if(e.ctrlKey && e.shiftKey && e.keyCode === 74){return false;}
  if(e.ctrlKey && e.keyCode === 85){return false;}
  if(e.ctrlKey && e.shiftKey && 67){return false;}
  if(e.ctrlKey && e.keyCode === 83){return false;}
  if(e.ctrlKey && e.keyCode === 80){return false;}}
document.oncontextmenu = function(){return false;};
document.onselectstart= function() {return false;};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
