import React from 'react';
import './scss/style.scss';
import InputToDo from './component/InputToDo';
import Tags from './component/Tags';
import listToDo from './component/listtodo';
import Actions from './component/Actions';
import ShowItemTask from './component/ShowItemTask';

class APP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listToDo,
      dataList: [],
      dataAction: []
    }
  }
  showAll = () => {
    this.setState ({
      dataList: listToDo
    })
  }
  showHome = () => {
    this.setState ({
      dataList: listToDo.home,
      dataAction: this.state.dataList
    })
  }
  showWork = () => {
    this.setState ({
      dataList: listToDo.work,
      dataAction: this.state.dataList
    })
  }
  showSchool = () => {
    this.setState ({
      dataList: listToDo.School,
      dataAction: this.state.dataList
    })
  }
  showActive = () => {
    this.setState ({
      dataAction: this.state.dataList.filter(item => item.status === false)
    })
  }
  showCompleted = () => {
    this.setState ({
      dataAction: this.state.dataList.filter(item => item.status === true)
    })
  }
  showAllTask = () => {
    this.setState ({
      dataAction: this.state.dataList
    })
  }
  onDelete = (id) => {
    this.state.dataList.forEach((element, index) => {
      if (element.id === id) {
        this.state.dataList.splice(index, 1)
        this.setState ({
          dataAction: this.state.dataList
        })
      }
    });
  } 
  onCheck = (id) => {
    this.state.dataList.forEach((element, index) => {
      if (element.id === id) {
        const st = element.status === true ? false : true
        this.setState ({
          status : st
        })
      }
    });
  } 
  addToDo = () => {

  }
  render() {
    return (
      <div className="todo__app">
        <h1>REACT TODO APP</h1>
        <hr/>

        <div className="content__todoapp">
          <InputToDo
            addToDo = {this.addToDo}
          />
          <Tags 
            showAll = {this.showAll}
            showHome = {this.showHome}
            showWork = {this.showWork}
            showSchool = {this.showSchool}
          />
          <ShowItemTask 
            data={this.state.dataAction}
            onDelete = {this.onDelete}
            onCheck = {this.onCheck}
          />
          <Actions 
            actionData={this.state.dataList}
            showAllTask = {this.showAllTask}
            showActive = {this.showActive}
            showCompleted = {this.showCompleted}
          />
        </div>
      </div>
    )
  }
}

export default APP;
