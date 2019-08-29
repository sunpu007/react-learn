import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => {
  return (
    <h1>index</h1>
  )
}

const List = () => {
  return (
    <h1>list</h1>
  )
}

const AppRouter = () => {
  return (
    <Router>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/list/'>列表</Link></li>
      </ul>
      <Route path='/' exact component={Index} />
      <Route path='/list/' component={List} />
    </Router>
  )
}

export default AppRouter