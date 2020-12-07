import React from 'react';
import Body from './Body';
import Header from './Header';
import './style.scss';

class TodoApp extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Body/>
      </>
    )
  }
}

export default TodoApp;
