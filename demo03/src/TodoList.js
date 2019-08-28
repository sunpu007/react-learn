import React, { Fragment } from 'react';
import { connect } from 'react-redux'

const TodoList = (props) => {
  let { inputValue, inputChange, addItem, list, deleteItem } = props
  return (
    <Fragment>
        <div>
          <input
            placeholder={inputValue}
            value={inputValue}
            onChange={inputChange}
          />
          <button onClick={addItem}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={()=>{
                    deleteItem(index)
                  }}
                  // onClick={deleteItem.bind(this, index)}
                >
                  {item}
                </li>
              )
            })
          }
        </ul>
      </Fragment>
  )
}

// class TodoList extends Component {
//   render() {
//     let { inputValue, inputChange, addItem, list, deleteItem } = this.props
//     return (
//       <Fragment>
//         <div>
//           <input
//             placeholder={inputValue}
//             value={inputValue}
//             onChange={inputChange}
//           />
//           <button onClick={addItem}>提交</button>
//         </div>
//         <ul>
//           {
//             list.map((item, index) => {
//               return (
//                 <li
//                   key={index}
//                   onClick={()=>{
//                     deleteItem(index)
//                   }}
//                   // onClick={deleteItem.bind(this, index)}
//                 >
//                   {item}
//                 </li>
//               )
//             })
//           }
//         </ul>
//       </Fragment>
//     )
//   }
// }

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange (e) {
      const action = {
        type: 'changeInput',
        value: e.target.value
      }
      dispatch(action)
    },
    addItem () {
      const action = {
        type: 'addItem'
      }
      dispatch(action)
    },
    deleteItem (index) {
      const action = {
        type: 'deleteItem',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList);