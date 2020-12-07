import React from 'react';
import './scss/style.scss';
import TodoApp from './component/TodoApp/index'

class APP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <>
        <TodoApp/>
      </>
    )
  }
}

export default APP;
