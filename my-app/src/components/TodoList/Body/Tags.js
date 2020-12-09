import React from 'react';

class Tags extends React.Component {
  constructor() {
    super()
    this.state = {
      currentTag: '',
      tags: ['Home', 'Work', 'School']
    }
  }
  render() {
    const {currentTag} = this.props
    const {tags} = this.state
    return (
      <div className="Tag">
        Tags : 
        <span
          onClick={() => this.props.setCurrentTag('')}
          className={!currentTag ? 'active' : '' }
        > All</span>
        {
          tags.map((item, index) => {
          return <span 
            className={currentTag === item ? 'active' : '' }
            key={index}
            onClick={() => this.props.setCurrentTag(item)}
          > {item}</span>
          })
        }
      </div>
    )
  }
}

export default Tags;
