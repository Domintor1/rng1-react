import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import reportWebVitals from './reportWebVitals';




const RNG = function () {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='randomNum'>
          <p>
            Random number: <span> 5</span>
          </p>
        </div>
        <div className='numContainer'>
          <div>
            <p>Min:</p>
            <input type='number' />
          </div>
          <div>
            <p>Min:</p>
            <input type='number' />
          </div>
        </div>
        <button>Get Random Number</button>
      </div>
    </div>
  )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RNG />
  </React.StrictMode>
);