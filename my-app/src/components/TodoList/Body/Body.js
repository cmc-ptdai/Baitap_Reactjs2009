import React from 'react';
import Input from './Input';
import Tags from './Tags';
import ListTask from './ListTask';

class Body extends React.Component {
  constructor() {
    super()
    this.state = {
      currentTag: '',
      list: [
        {id: 1, name: 'làm bt văn', group: 'Work', status: true},
        {id: 2, name: 'rửa bát', group: 'Home', status: false},
        {id: 3, name: 'học toán', group: 'School', status: true},
        {id: 4, name: 'làm bt toán', group: 'Work', status: false}
      ],
      listAction: []
    }
  }
  setCurrentTag = (tag) => {
    this.setState ({
      currentTag: tag
    })
  }
  addNewTask = task => {
    this.setState ({
      list: [...this.state.list, task]
    })
  }
  removeTask = task => {
    this.setState ({
      list: this.state.list.filter(item => item.id !== task.id)
    })
  }
  allTask = () => {
    this.setState ({
      listAction: this.state.list.filter(item => item.group === this.state.currentTag)
    })
  }
  activeTask = () => {
    this.setState ({
      listAction: this.state.list.filter(item => item.group === this.state.currentTag)
    })
  }
  checked = task => {
    this.state.list.forEach(item => {
      if (item.id === task.id) {
        item.status = !item.status
      }
    })
    this.setState ({
      list: this.state.list
    })
  }
  render() {
    const {currentTag, list} = this.state
    return (
      <div className="todo__app">
        <Input
          currentTag={currentTag}
          addNewTask={this.addNewTask}
        />
        <Tags
          currentTag={currentTag}
          setCurrentTag={this.setCurrentTag}
        />
        <ListTask
          list={list}
          currentTag={currentTag}
          removeTask={this.removeTask}
          checked={this.checked}
        />
      </div>
    )
  }
}

export default Body;
