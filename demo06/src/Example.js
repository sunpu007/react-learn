import React, { useState, Fragment } from 'react';

function Example () {
  const [count, setCount] = useState(0)
  return (
    <Fragment>
      <p>you clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </Fragment>
  )
}
 
export default Example;