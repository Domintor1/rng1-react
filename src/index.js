import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import reportWebVitals from './reportWebVitals';




const RNG = function () {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  const getRandomNum = () => {
       setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
  }


  return (
    <div className='hero'>
      <div className='container'>
        <div className='randomNum'>
          <p>
            Random number: <span> {randomNum} </span>
          </p>
        </div>
        <div className='numContainer'>
          <div>
            <p>Min:</p>
            <input type='number' value={minVal} onChange={e => setMinVal(+e.target.value)}/>
          </div>
          <div>
            <p>Max:</p>
            <input type='number' value={maxVal} onChange={e=> setMaxVal(+e.target.value)}/>
          </div>
        </div>
        <button onClick={getRandomNum}>Get Random Number</button>
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