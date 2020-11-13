import React, { Component, component } from 'react'
import { Input, Button, List } from 'antd'

// 如果组件中只有一个render函数 可以直接使用无状态组件
// const TodoListUI = (props) => {
//   return (
//     <div style={{marginTop: '10px', marginLeft: '10px'}}>
//       <div className="name"></div>
//       <div>
//         <Input
//           value={props.inputValue}
//           placeholder='todo info'
//           style={{width: '300px', marginRight: '10px'}}
//           onChange={props.handleInputChange}
//         />
//         <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
//       </div>
//       <List
//         style={{marginTop: '10px', width: '300px'}}
//         bordered
//         dataSource={props.list}
//         renderItem={(item, index) => (
//           <List.Item onClick={() => props.handleItemDelete(index)}>
//             {item}
//           </List.Item>
//         )}
//       />
//     </div>
//   )
// }
class TodoListUI extends Component {
  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div className="name"></div>
        <div>
          <Input
            value={this.props.inputValue}
            placeholder='todo info'
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.props.handleItemDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default TodoListUI