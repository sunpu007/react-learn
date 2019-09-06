import React, { Fragment, useRef, useState, useEffect } from 'react';

function Example8() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.value = 'Jerry'
    console.log(inputEl)
  }

  const [text, setText] = useState('text')
  const textRef = useRef()

  useEffect(() => {
    textRef.current = text
    console.log('textRef.current ==>', text)
  })

  return (
    <Fragment>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br/><br/><br/><br/>
      <input type="text" value={text} onChange={e=>setText(e.target.value)} />
    </Fragment>
  )
}

export default Example8