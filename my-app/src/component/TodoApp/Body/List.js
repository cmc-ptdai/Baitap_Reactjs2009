import React from 'react';

class List extends React.Component {
    renderList = () => {
        const {currentTag} = this.props
        let newList = this.props.list
        if (currentTag) {
            newList = this.props.list.filter(item => item.group === currentTag)
        }
        return newList
    }
  render() {
    const list = this.renderList()
    return (
      <div className='list'>
          {
              list.map((item, index) => {
                  return <div key={index} >
                      <input type="checkbox" />
                      <span>{item.name}</span>
                      <button onClick={() => this.props.removeTask(item)}>x</button>
                  </div>
              })
          }
      </div>
    )
  }
}

export default List;
