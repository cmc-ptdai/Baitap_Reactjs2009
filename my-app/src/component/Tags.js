import React from 'react';

class Tags extends React.Component {
  showAll = () => {
    this.props.showAll()
  }
  showHome = () => {
    this.props.showHome()
  }
  showWork = () => {
    this.props.showWork()
  }
  showSchool = () => {
    this.props.showSchool()
  }
  render() {
    return (
      <div className="tags">
        <ul>
        <li>
            <span>Tags</span>
          </li>
          <li>
            <i className="fas fa-circle"></i>
            <button type="button" onClick={this.showAll}>All</button>
          </li>
          <li>
            <button onClick={this.showHome}>
              <i className="fas fa-circle"></i>
              <span>Home</span>
            </button>
          </li>
          <li>
            <button onClick={this.showWork}>
              <i className="fas fa-circle"></i>
              <span>Work</span>
            </button>
          </li>
          <li>
            <button onClick={this.showSchool}>
              <i className="fas fa-circle"></i>
              <span>School</span>
            </button>
          </li>
          <li>
            <button>Reset</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Tags;
