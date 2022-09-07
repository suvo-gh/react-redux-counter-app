import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { increment, decrement, reset } from './actions';
import './App.css'

function App() {
  const counter = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <div>
      <button onClick={()=>dispatch(increment(1))}>+</button>
      <button onClick={()=>dispatch(decrement(1))}>-</button>
      </div>
      <br/>
      <br/>
      <input type="number" id="changeBy" placeholder="Enter number to change value"></input>
      <br/>
      <div>
      <button onClick={()=>dispatch(increment(document.getElementById("changeBy").value ? document.getElementById("changeBy").value : 0))}>+X</button>
      <button onClick={()=>dispatch(decrement(document.getElementById("changeBy").value ? document.getElementById("changeBy").value : 0))}>-X</button>
      </div>
      <br/>
      <br/>
      <button onClick={()=>dispatch(reset())}>RESET</button>
    </div>
  );
}

export default App;
