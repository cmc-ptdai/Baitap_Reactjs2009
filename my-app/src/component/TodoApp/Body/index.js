import React from 'react';
import Input from './Input';
import Tags from './TagList';
import List from './List';

class Body extends React.Component {
  constructor() {
    super()
    this.state = {
      currentTag: '',
      list: []
    }
  }
  setCurrentTag = tag => {
    this.setState ({
      currentTag: tag
    })
  }
  addNewTask = (item) => {
    this.setState ({
      list: [...this.state.list,item]
    })
  }
  removeTask = (tag) => {
    this.setState ({
      list: this.state.list.filter(item => item.uuid !== tag.uuid)
    })
  }
  render() {
    const {currentTag, list} = this.state
    return (
      <>
        <h1>body</h1>
        <Input
          currentTag={currentTag}
          addNewTask={this.addNewTask}
        />
        <Tags
          currentTag={currentTag} 
          setCurrentTag={this.setCurrentTag}
        />
        <List
          currentTag={currentTag} 
          list={list}
          removeTask={this.removeTask}
        />
      </>
    )
  }
}

export default Body;
