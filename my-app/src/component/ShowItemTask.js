import React from 'react';
import ItemTask from './ItemTask';

class ShowItemTask extends React.Component {
  onDelete = () => {
    this.props.onDelete();
  }
  onCheck = () => {
    this.props.onCheck();
  }
  render() {
    const {data} = this.props
    const listItemHome = data.map(item => {
      return ( 
        <ItemTask
          key={item.id}
          dataItem={item}
          onDelete = {this.props.onDelete}
          onCheck = {this.props.onCheck}
        /> 
      )
    })
    return (
      <div className="show__task">
          {data && listItemHome}
      </div>
    )
  }
}

export default ShowItemTask;
