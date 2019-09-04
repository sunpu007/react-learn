import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index () {
  useEffect(() => {
    console.log('老弟，你来了，Index')
    return () => {
      console.log('老弟，你走了，Index')
    }
  }, [])
  return <h2>Index</h2>
}

function List () {
  useEffect(() => {
    console.log('老弟，你来了，List')
  })
  return <h2>List</h2>
}

function Example () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
    return () => {
      console.log('++++++++++++++++++++++++')
    }
  }, [count])
  return (
    <Fragment>
      <p>you clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
      <Router>
        <ul>
          <li><Link to='/'>index</Link></li>
          <li><Link to='/list/'>list</Link></li>
        </ul>
        <Route path='/' exact component={Index} />
        <Route path='/list/' component={List} />
      </Router>
    </Fragment>
  )
}
 
export default Example;