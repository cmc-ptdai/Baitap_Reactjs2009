import React from 'react';
import ToDoList  from './components/TodoList/Index';
import './scss/style.css';

class APP extends React.Component {
  render() {
    return (
      <div>
        <ToDoList/>
      </div>
    )
  }
}

export default APP;
