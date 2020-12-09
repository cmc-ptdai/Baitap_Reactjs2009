import React from 'react';

class Action extends React.Component {
  render() {
    return (
      <div className="action">
        <span onClick={() => this.props.allTask()}>All Task</span>
        <span onClick={() => this.props.activeTask()}>Active</span>
        <span onClick={() => this.props.completedTask()}>Completed</span>
        <label><span>1</span> / <span>3</span> Completed</label>
      </div>
    )
  }
}

export default Action;
