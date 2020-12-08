import React from 'react';

class TagList extends React.Component {
    constructor() {
        super()
        this.state = {
          tags: ['Home', 'Work', 'School']
        }
      }
  render() {
      const {currentTag} = this.props
      const {tags} = this.state
    return (
      <div className="tags">
        tags: 
        <span onClick={() => this.props.setCurrentTag('')} className={!currentTag ? 'tag-active' : ''}> All </span>
        {
        tags.map((tag, index) => {
          return <span 
          className={ currentTag === tag ? 'tag-active' : ''} 
          onClick={() => this.props.setCurrentTag(tag)}
          key={index} >{tag} </span>
        })
        }
      </div>
    )
  }
}

export default TagList;