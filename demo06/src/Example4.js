import React, { Fragment, useState, createContext, useContext } from 'react';

const CountContext = createContext()

function Counter () {
  let count = useContext(CountContext)
  return <h2>{count}</h2>
}

function Example () {
  const [count, setCount] = useState(0)
  return (
    <Fragment>
      <p>you clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </Fragment>
  )
}
 
export default Example;