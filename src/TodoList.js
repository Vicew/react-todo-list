import React, { Component, Fragment } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>1</li>
          <li>1</li>
        </ul>
      </Fragment>
    );
  }


  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
    // this.state.inputValue = e.target.value
    console.log(this)
  }

}

export default TodoList;
