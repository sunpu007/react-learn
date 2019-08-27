import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

/**
 * 无状态组件
 * @param {*} props 
 */
const TodoListUi = (props) => {
  return (
    <Fragment>
      <div>
        <Input
          placeholder={props.inputValue}
          value={props.inputValue}
          style={{width: '250px', marginRight: '10px'}}
          onChange={props.changeInputValue}
        />
        <Button
          type="primary"
          onClick={props.addItem}
        >
          增加
        </Button>
      </div>
      <div style={{marginTop: '20px', width: '300px'}}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index)=>(
            <List.Item
              onClick={()=>{props.deleteItem(index)}}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </Fragment>
  )
}

// class TodoListUi extends Component {
//   render() { 
//     return (
//       <Fragment>
//         <div>
//           <Input
//             placeholder={this.props.inputValue}
//             value={this.props.inputValue}
//             style={{width: '250px', marginRight: '10px'}}
//             onChange={this.props.changeInputValue}
//           />
//           <Button
//             type="primary"
//             onClick={this.props.addItem}
//           >
//             增加
//           </Button>
//         </div>
//         <div style={{marginTop: '20px', width: '300px'}}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index)=>(
//               <List.Item
//                 onClick={()=>{this.props.deleteItem(index)}}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </Fragment>
//     )
//   }
// }
 
export default TodoListUi;