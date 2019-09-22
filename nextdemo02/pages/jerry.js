import React, { useState } from 'react'

function Jerry () {
  const [color, setColor] = useState('blue')
  function changeColor () {
    setColor(color === 'blue' ? 'red' : 'blue')
  }
  return (
    <>
      <div>你好，我是Jerry</div>
      <div>
        <button onClick={changeColor}>切换颜色</button>
      </div>
      <style jsx>
        {`
          div {color: ${color};}
        `}
      </style>
    </>
  )
}

export default Jerry