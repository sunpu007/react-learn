import React, { Component, Fragment } from 'react';

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  componentDidMount () {
    console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
  }
  componentDidUpdate () {
    console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
  }
  render() { 
    return (
      <Fragment>
        <p>you clicked {this.state.count} times</p>
        <button onClick={this.addCount.bind(this)}>click me</button>
      </Fragment>
    );
  }
  addCount () {
    this.setState({
      count: this.state.count + 1
    })
  }
}
 
export default Example3;