import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './style.css'
import store from './store'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.addItem = this.addItem.bind(this)
    /**
     * 订阅者模式
     * 订阅Redux的状态
     */
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return (
      <Fragment>
        <div>
          <Input
            placeholder={this.state.inputValue}
            value={this.state.inputValue}
            style={{width: '250px', marginRight: '10px'}}
            onChange={this.changeInputValue}
          />
          <Button
            type="primary"
            onClick={this.addItem}
          >
            增加
          </Button>
        </div>
        <div style={{marginTop: '20px', width: '300px'}}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index)=>(
              <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>
            )}
          />
        </div>
      </Fragment>
    );
  }
  changeInputValue (e) {
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
  }
  addItem () {
    const action = { type: 'addItem' }
    store.dispatch(action)
  }
  deleteItem (index) {
    const action = {
      type: 'deleteItem',
      index
    }
    store.dispatch(action)
  }
  storeChange () {
    this.setState(store.getState())
  }
}
 
export default TodoList;