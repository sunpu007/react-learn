import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom'
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'

function Video () {
  return (
    <Fragment>
      <div className="topNav">
        <ul>
          <li><Link to="/video/reactpage">React教程</Link></li>
          <li><Link to="/video/flutter">Flutter教程</Link></li>
          <li><Link to="/video/vue">Vue教程</Link></li>
        </ul>
      </div>
      <div>
        <Route path="/video/reactpage" component={ReactPage} />
        <Route path="/video/flutter" component={Flutter} />
        <Route path="/video/vue" component={Vue} />
      </div>
    </Fragment>
  )
}

export default Video