import React from 'react';

class InputToDo extends React.Component {
  addToDo = () => {
    this.props.addToDo()
  }
  render() {
    return (
      <div className="input__todo">
        <input type="text" id="inputTodo" placeholder="what do you need to do ?" />
        <button onClick={this.addToDo}><i className="fas fa-plus"></i></button>
      </div>
    )
  }
}

export default InputToDo;
