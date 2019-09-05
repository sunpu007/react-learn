import React, { Fragment, useReducer } from 'react';

function Example () {
  const [count, dispatch] = useReducer((state, action) => {
    switch(action) {
      case 'add':
        return ++state
      case 'sub':
        return --state
      default:
        return state
    }
  }, 0)
  return (
    <Fragment>
      <h2>当前的分数是{count}</h2>
      <button onClick={() => {dispatch('add')}}>add</button>
      <button onClick={() => {dispatch('sub')}}>sub</button>
    </Fragment>
  )
}

export default Example;