import React, { Fragment, useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './Color'

function Buttons () {
  const { dispatch } = useContext(ColorContext)
  return (
    <Fragment>
      <button onClick={()=>{dispatch({ type: UPDATE_COLOR, color: 'blue' })}}>蓝色</button>
      <button onClick={()=>{dispatch({ type: UPDATE_COLOR, color: 'yellow' })}}>黄色</button>
    </Fragment>
  )
}

export default Buttons