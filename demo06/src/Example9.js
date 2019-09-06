import React, { useState, useEffect, useCallback } from 'react';

function useWinSize () {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return size

}


function Example9 () {
  const size = useWinSize()
  return (
    <h1>当前窗口大小是：{size.width} X {size.height}</h1>
  )
}

export default Example9