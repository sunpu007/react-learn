import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import './style.css'

class Xiaojiejie extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  // componentWillMount () {
  //   console.log('componentWillMount...组件将要挂载到页面的时刻')
  // }
  // componentDidMount () {
  //   console.log('componentDidMount...组件挂载完成的时刻')
  // }
  // shouldComponentUpdate () {
  //   console.log('shouldComponentUpdate...')
  //   return true
  // }
  // componentWillUpdate () {
  //   console.log('componentWillUpdate...')
  // }
  // componentDidUpdate () {
  //   console.log('componentDidUpdate')
  // }
  // componentWillReceiveProps () {
  //   console.log('componentWillReceiveProps...')
  // }
  componentDidMount () {
    Axios.get('https://www.easy-mock.com/mock/5d62c7e39d7a4c353eb2120b/ReactDemo01/xiaojiejie').then(res => {
      console.log(res.data)
      this.setState({
        list: res.data.data
      })
    }).catch(error => {
      console.log(error)
    })
  }
  render () {
    // console.log('render...组件挂载中')
    return (
      <Fragment>
        <div>
          <label htmlFor="server">增加服务：</label>
          <input
            id="server"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={input=>{this.input=input}}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={ul=>{this.ul=ul}}>
          {
            this.state.list.map((item, index) => {
              return (
                // <li
                //   key={index}
                //   onClick={this.deleteItem.bind(this, index)}
                //   dangerouslySetInnerHTML={{__html:item}}>
                // </li>
                <XiaojiejieItem
                  key={index}
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                />
              )
            })
          }
        </ul>
        <Boss />
        {/* <img className="img" src="/logo512.png" alt="" /> */}
      </Fragment>
    )
  }
  inputChange (e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    this.setState({
      inputValue: this.input.value
    })
  }
  addList () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
    /**
     * Error
     * console.log(this.ul.querySelectorAll('li').length)
     */
  }
  deleteItem (index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Xiaojiejie