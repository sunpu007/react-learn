import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
import Axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (list) => ({
  type: GET_LIST,
  list
})

export const getTodoList = () => {
  return (dispatch) => {
    Axios.get('https://www.easy-mock.com/mock/5d62c7e39d7a4c353eb2120b/ReactDemo01/getList').then(res => {
      const action = getListAction(res.data.data.list)
      dispatch(action)
    })
  }
}

export const getMyListAction = () => ({
  type: GET_MY_LIST
})