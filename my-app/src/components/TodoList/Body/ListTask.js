import React from 'react';
import Action from './Action';

class ListTask extends React.Component {
  constructor() {
    super()
    this.state = {
      listAction: []
    }
  }
  allTask = () => {
    this.setState ({
      listAction: this.props.list
    })
  }
  activeTask = () => {
    this.setState ({
      listAction: this.props.list.filter(item => !item.status)
    })
  }
  completedTask = () => {
    this.setState ({
      listAction: this.props.list.filter(item => item.status)
    })
  }
  renderList = () => {
    const {currentTag} = this.props
    let newList = this.props.list
    if (currentTag) {
      newList = this.state.listAction.filter(item => item.group === currentTag)
    }
    return newList
  }
  render() {
    const list = this.renderList()
    return (
      <div className="list__task">
        {
          list.map((item, index) => {
            if (item.status) {
              return <div key={index} >
              <input type="checkbox" defaultChecked onClick={() => this.props.checked(item)}/>
              <span>{item.name}</span>
              <button onClick={() => this.props.removeTask(item)}>x</button>
            </div>
            } else {
              return <div key={index} >
              <input type="checkbox" onClick={() => this.props.checked(item)} />
              <span>{item.name}</span>
              <button onClick={() => this.props.removeTask(item)}>x</button>
            </div>
            }
          })
        }
        <Action
          allTask={this.allTask}
          activeTask={this.activeTask}
          completedTask={this.completedTask}
        />
      </div>
    )
  }
}

export default ListTask;