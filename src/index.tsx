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

window.onresize = function(){
if ((window.outerHeight - window.innerHeight) > 150 || (window.outerWidth - window.innerWidth) > 110) {
  (navigator.onLine)?window.open("https://www.google.com/search?source=hp&ei=VesOYI2cAaWhmgeesKPQCA&q=Padma+Gnanapriya&oq=Padma+Gnanapriya&gs_lcp=CgZwc3ktYWIQAzIFCAAQzQI6CAgAEOoCEI8BOg4ILhCxAxDHARCjAhCTAjoICAAQsQMQgwE6BQgAELEDOg4ILhCxAxCDARDHARCjAjoCCAA6CwguELEDEMcBEK8BOgUILhCxAzoICC4QsQMQgwE6AgguOggILhCxAxCTAjoICC4QxwEQrwE6CwguEMcBEK8BEJMCOgQIABANOgYIABANEB46CAgAEAgQDRAeOgUIIRCgAToHCCEQChCgAVCAvgFYq98BYO3jAWgBcAB4AYAB4gWIAeEckgEMMC4xMy40LTEuMS4xmAEAoAEBqgEHZ3dzLXdperABAg&sclient=psy-ab&ved=0ahUKEwjNmoizurfuAhWlkOYKHR7YCIoQ4dUDCAY&uact=5","_self"):window.close();
  }
}


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
