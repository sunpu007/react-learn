import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Index = () => {
  function gotoB () {
    Router.push('/jerryB')
  }

  return (
    <>
      <h1>我是首页</h1>
      <div>
        <Link href="/jerryA">
          <a>
            <span>跳转到A页面</span>
            <span>icon</span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/jerryB"><a>跳转到B页面</a></Link>
      </div>
      <div>
        <button onClick={()=>{Router.push('/jerryA')}}>去A页面</button>
      </div>
      <div>
        <button onClick={gotoB}>去B页面</button>
      </div>
    </>
  )
}

export default Index
