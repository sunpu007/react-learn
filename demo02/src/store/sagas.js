import { takeEvery, put } from 'redux-saga/effects'  
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import Axios from 'axios'

function* mySaga () {
  yield takeEvery(GET_MY_LIST, getMyList)
}

function* getMyList () {
  const { data } = yield Axios.get('https://www.easy-mock.com/mock/5d62c7e39d7a4c353eb2120b/ReactDemo01/getList')
  const action = getListAction(data.data.list)
  yield put(action)
}

export default mySaga