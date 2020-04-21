import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  return (
    <div className='App'>
      <h1>Counter: {counter} </h1>
      <button>+</button>
      <button>-</button>
      {isLogged ? <h3>Valuable information I shouldn't see unless I'm logged in</h3> : ''}
      
    </div>
  )
}

export default App;