import React from 'react';
import { v4 as uuid } from 'uuid';


class Input extends React.Component {
  constructor() {
    super() 
    this.state = {
      value: '',
    }
  }
  handleChange = event => {
    const {value} = event.target //value = event.target.value
    this.setState ({
      value: value
    })
  }
  onClick = () => {
    const {value} = this.state
    if (!value.trim()) {
      return alert('hãy nhâp công việc của bạn')
    }
    if (this.props.currentTag === '') {
      return alert('hãy chọn 1 tag')
    }
    this.props.addNewTask({
      name: this.state.value,
      group: this.props.currentTag,
      id: uuid()
    })
  }
  render() {
    const {value} = this.state
    return (
      <div className="input">
          <input type="text" value={value} onChange={this.handleChange} />
          <button onClick={this.onClick}><i className="fas fa-plus"></i></button>
      </div>
    )
  }
}

export default Input;
