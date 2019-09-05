import React, { Fragment, useState, useMemo } from 'react';

function Example7 () {
  const [ xiaoHong, SetXiaoHong ] = useState('小红')
  const [ zhiLing, SetZhiLing ] = useState('志玲')
  return (
    <Fragment>
      <button onClick={()=>{SetXiaoHong(new Date().getTime())}}>小红</button>
      <button onClick={()=>{SetZhiLing(new Date().getTime()+',志玲来了')}}>志玲</button>
      <ChildComponent name={xiaoHong}>{zhiLing}</ChildComponent>
    </Fragment>
  )
}

function ChildComponent ({ name, children }) {
  function chengeXiaoHong (name) {
    console.log('小红走来了')
    return name + ',小红走来了'
  }
  const actionXiaohong = useMemo(() => chengeXiaoHong(name), [name])
  return (
    <Fragment>
      <p>{actionXiaohong}</p>
      <p>{children}</p>
    </Fragment>
  )
}


export default Example7