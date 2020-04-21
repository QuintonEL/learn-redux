import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';



//STORE -> GLOABALIZED STATE

//ACTION -> INCREMENT
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER -> DECIDES WHAT TO DO WITH THE ACTION
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
  }
}

let store = createStore(counter);

//DISPLAY IN THE CONSOLE
store.subscribe(() => console.log(store.getState()));

//DISPATCH -> SET THAT ACTION
store.dispatch(increment());
store.dispatch(decrement());



ReactDOM.render(<App />, document.getElementById('root'));