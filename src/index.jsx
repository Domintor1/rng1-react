import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const RNG = function () {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  const getRandomNum = () => {

      if(maxVal > minVal) {
        setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
      } else {
        return "Max value must be higher than min value"
      }
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RNG />
  </React.StrictMode>
);