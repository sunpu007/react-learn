import React, { Component } from 'react';
// import Axios from 'axios'
import './style.css'
import store from './store'
/**
 * getListAction
 */
import { changeInputAction, addItemAction, deleteItemAction, getMyListAction } from './store/actionCreators'
import TodoListUi from './TodoListUi'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    /**
     * 订阅者模式
     * 订阅Redux的状态
     */
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        addItem={this.addItem}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    )
  }
  componentDidMount () {
    const action = getMyListAction()
    store.dispatch(action)
    // const action = getTodoList()
    // store.dispatch(action)
    // Axios.get('https://www.easy-mock.com/mock/5d62c7e39d7a4c353eb2120b/ReactDemo01/getList').then(res => {
    //   const action = getListAction(res.data.data.list)
    //   store.dispatch(action)
    // })
  }
  changeInputValue (e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  addItem () {
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem (index) {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
  storeChange () {
    this.setState(store.getState())
  }
}
 
export default TodoList;