import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from './axios'
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候, render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  // 在组件即将被挂在到页面的时刻自动执行
  componentWillMount(){
    console.log('componentWillMount')
  }

  // 组件被挂载到页面之后，自动被执行
  componentDidMount(){
    axios.get()
  }

  // 组件被更新之前，他会自动被执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  // 组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后被执行，如果shouldComponentUpdate返回true才会执行
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        {/* Fragment是组件 */}
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => { return (
      <TodoItem
        key={index}
        content={item} 
        index={index} 
        deleteItem={this.handleItemDelete} />
    )}) 
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

}

export default TodoList
