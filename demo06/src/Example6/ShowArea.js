import React, { useContext } from 'react';
import { ColorContext } from './Color'

function ShowArea () {
  const { color } = useContext(ColorContext)
  return <h2 style={{color: color}}>当前颜色值是bule</h2>
}

export default ShowArea