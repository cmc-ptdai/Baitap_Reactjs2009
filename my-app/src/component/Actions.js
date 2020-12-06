import React from 'react';

class Actions extends React.Component {
  showAllTask = () => {
    this.props.showAllTask()
  }
  showActive = () => {
    this.props.showActive()
  }
  showCompleted = () => {
    this.props.showCompleted()
  }
  render() {
    let count = 0
    this.props.actionData.forEach(element => {
        if (element.status === true) {
          count++
        }
    });
    return (
      <div className="action__todo">
        <ul>
          <li>
            <button onClick={this.showAllTask}>All Tasks</button>
          </li>
          <li>
            <button onClick={this.showActive}>Active</button>
          </li>
          <li>
            <button onClick={this.showCompleted}>Completed</button>
          </li>
          <li>
            <label><span>{count}</span> / <span>{this.props.actionData.length}</span> Completed</label>
          </li>
        </ul>
      </div>
    )
  }
}

export default Actions;
