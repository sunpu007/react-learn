import React, { useState, Fragment } from 'react';

function Example () {
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端开发工程师')
  return (
    <Fragment>
      <p>Jerry 今年: {age}岁</p>
      <p>性别: {sex}</p>
      <p>工作: {work}</p>
    </Fragment>
  )
}
 
export default Example;