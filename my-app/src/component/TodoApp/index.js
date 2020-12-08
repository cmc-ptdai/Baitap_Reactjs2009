import React from 'react';
import Body from './Body/index';
import Header from './Header';
import './style.scss';

class TodoApp extends React.Component {
  render() {
    return (
      <div className="todo__app">
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default TodoApp;
