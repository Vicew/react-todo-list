import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  // 当一个组件从父组件接受参数
  // 如果这个组件第一次存在与父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }

  // 当这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

// TodoItem.prototype = {
//   content: PropTypes.string,
//   deleteItem: PropTypes.func,
//   index: PropTypes.number
// }

// TodoItem.defaultProps = {}

export default TodoItem