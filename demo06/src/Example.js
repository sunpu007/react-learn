import React, { Fragment, useState, useEffect } from 'react';

function Example () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
  })
  return (
    <Fragment>
      <p>you clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </Fragment>
  )
}
 
export default Example;