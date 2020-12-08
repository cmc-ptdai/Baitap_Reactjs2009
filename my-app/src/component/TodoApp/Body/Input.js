import React from 'react';
import { v4 as uuid } from 'uuid';

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  handleChange = event => {
    const {value} = event.target
    this.setState ({
      value: value // trùng cso thể viết 1 cái là value
    })
  }
  onClick = () => {
    const {value} = this.state
    if (!value.trim()) {
      return alert('hãy nhâp vào 1 chuỗi')
    }

    if (!this.props.currentTag) {
      return alert('hãy chọn 1 tag')
    }
    this.props.addNewTask({
      name: this.state.value,
      group: this.props.currentTag,
      uuid: uuid()
    })
  }
  render() {
    const {value} = this.state
    return (
      <>
        <>
          <input type="text" value = {value} onChange={this.handleChange} />
          <button onClick={this.onClick} ><i className="fas fa-plus"></i></button>
        </>
      </>
    )
  }
}

export default Input;